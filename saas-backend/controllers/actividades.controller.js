import { crearRunAI21, obtenerRunAI21 } from "../services/ai21.service.js";
import { tiposConfig } from "../config/tiposConfig.js";

export const generarActividad = async (req, res) => {
  const { tema, tipo, numPreguntas, nivel, dificultad } = req.body;

  if (!tema || !tipo) {
    return res.status(400).json({ error: "Faltan parámetros requeridos." });
  }

  const tipoConfig = tiposConfig[tipo] || tiposConfig["opcion-multiple"];

  const prompt = `
    Eres un experto en pedagogía. Crea ${numPreguntas} actividades de tipo "${tipo}"
    sobre el tema "${tema}" para estudiantes de nivel ${nivel} y dificultad ${dificultad}.
    Sé claro, educativo y preciso.
    ${tipoConfig}
  `;

  try {
    const data = await crearRunAI21(prompt);
    if (!data?.id) throw new Error("No se recibió ID de ejecución desde AI21.");
    res.json({ runId: data.id });
  } catch (err) {
    console.error("❌ generarActividad:", err.message);
    res.status(500).json({ error: err.message });
  }
};

export const obtenerResultado = async (req, res) => {
  const { runId } = req.params;
  try {
    const data = await obtenerRunAI21(runId);
    if (data.status === "completed") {
      return res.json({ resultado: data.result || null });
    }
    res.json({ status: data.status });
  } catch (err) {
    console.error("❌ obtenerResultado:", err.message);
    res.status(500).json({ error: err.message });
  }
};
