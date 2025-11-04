import { useState, useCallback } from "react";

/**
 * useGenerateActivity
 * Encapsula la comunicación con el backend (generar-actividad + polling de resultado).
 * Usa VITE_API_URL si está definido, sino http://localhost:5000
 */


export const useGenerateActivity = () => {
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = (import.meta.env && import.meta.env.VITE_API_URL) || "http://localhost:5000";


  const clearError = () => setError(null);

  const generarActividad = useCallback(async (params) => {
    setError(null);
    setLoading(true);
    setResultado([]);

    try {
       const res = await fetch(`${API_URL}/api/actividades/generar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Error iniciando generación: ${res.status} ${txt}`);
      }

      const data = await res.json();
      const runId = data.runId || data.id || null;

      if (!runId) {
        throw new Error("No se recibió runId del servidor.");
      }

      // Polling con límite de intentos
      let finalData = null;
      let tries = 0;
      const maxTries = 20;
      const delayMs = 2000;

      while (tries < maxTries) {
        await new Promise((r) => setTimeout(r, delayMs));
         const check = await fetch(`${API_URL}/api/actividades/resultado/${runId}`);
        if (!check.ok) {
          // si falla, no abortamos de inmediato; registramos y seguimos
          console.warn("warning: resultado endpoint no OK", check.status);
          tries++;
          continue;
        }

        const fetched = await check.json();
        if (fetched.resultado) {
          finalData = fetched.resultado;
          break;
        }

        // si la api devuelve status en proceso, seguimos
        tries++;
      }

      if (!finalData) {
        throw new Error("No se obtuvo resultado dentro del tiempo esperado.");
      }

      // Intentamos parsear JSON; si no es JSON válido, lo devolvemos como texto
      try {
        const parsed = JSON.parse(finalData);
        setResultado(Array.isArray(parsed) ? parsed : [parsed]);
      } catch {
        setResultado([{ pregunta: finalData }]);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Error al generar actividad.");
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  return { generarActividad, resultado, loading, error, clearError };
};
