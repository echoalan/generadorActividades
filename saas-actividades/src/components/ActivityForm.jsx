import React, { useState } from "react";

/**
 * ActivityForm
 * Props:
 * - onGenerate(params) : function to call when generating
 * - loading: boolean
 * - error: string | null
 * - clearError: function
 */
export default function ActivityForm({ onGenerate, loading, error, clearError }) {
  const [tema, setTema] = useState("");
  const [tipo, setTipo] = useState("opcion-multiple");
  const [numPreguntas, setNumPreguntas] = useState(5);
  const [nivel, setNivel] = useState("Secundaria");
  const [dificultad, setDificultad] = useState("Media");

  const handleSubmit = (e) => {
    e && e.preventDefault();
    if (!tema.trim()) {
      // simple client-side validation — the hook also handles errors
      alert("Ingresá un tema.");
      return;
    }
    onGenerate({ tema, tipo, numPreguntas, nivel, dificultad });
  };

  return (
    <section className="panel form-panel" aria-labelledby="config-title">
      <h2 id="config-title">Configurar actividad</h2>

      <form className="form-grid" onSubmit={handleSubmit}>
        <input
          placeholder="Tema (ej: Ecosistemas, Revolución Francesa...)"
          value={tema}
          onChange={(e) => {
            setTema(e.target.value);
            error && clearError();
          }}
          aria-label="Tema"
        />

        <select value={tipo} onChange={(e) => setTipo(e.target.value)} aria-label="Tipo de actividad">
          <option value="opcion-multiple">Opción múltiple</option>
          <option value="verdadero-falso">Verdadero / Falso</option>
          <option value="completar">Completar frases</option>
          <option value="relacionar">Relacionar conceptos</option>
          <option value="ordenar">Ordenar pasos</option>
          <option value="pregunta-abierta">Pregunta abierta</option>
        </select>

        <input
          type="number"
          min="1"
          max="20"
          value={numPreguntas}
          onChange={(e) => setNumPreguntas(Number(e.target.value))}
          aria-label="Número de preguntas"
        />

        <select value={nivel} onChange={(e) => setNivel(e.target.value)} aria-label="Nivel">
          <option>Primaria</option>
          <option>Secundaria</option>
          <option>Universidad</option>
        </select>

        <select value={dificultad} onChange={(e) => setDificultad(e.target.value)} aria-label="Dificultad">
          <option>Fácil</option>
          <option>Media</option>
          <option>Difícil</option>
        </select>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "Generando..." : "Generar actividad"}
          </button>
        </div>
      </form>

      {error && <div className="error-banner">{error}</div>}
    </section>
  );
}
