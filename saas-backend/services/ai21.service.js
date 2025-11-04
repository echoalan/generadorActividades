import fetch from "node-fetch";

const BASE_URL = "https://api.ai21.com/studio/v1/maestro";

const getApiKey = () => {
  const key = process.env.AI21_API_KEY;
  if (!key) throw new Error("AI21_API_KEY no definida en .env");
  return key;
};

export const crearRunAI21 = async (prompt) => {
  const AI21_API_KEY = getApiKey();

  try {
    const res = await fetch(`${BASE_URL}/runs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AI21_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: [{ role: "user", content: prompt }],
        models: ["gpt-4o"],
        budget: "medium",
        output_type: { type: "string" },
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Error API AI21: ${res.status} ${txt}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("❌ Error en crearRunAI21:", err.message);
    throw err;
  }
};

export const obtenerRunAI21 = async (runId) => {
  const AI21_API_KEY = getApiKey();

  try {
    const res = await fetch(`${BASE_URL}/runs/${runId}`, {
      headers: { Authorization: `Bearer ${AI21_API_KEY}` },
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Error API AI21: ${res.status} ${txt}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("❌ Error en obtenerRunAI21:", err.message);
    throw err;
  }
};
