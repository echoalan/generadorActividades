import React from "react";

/**
 * ActivityCard: renderiza distintos formatos según la estructura del objeto 'q'.
 * Estructuras esperadas (ejemplos):
 * - { pregunta, opciones: [], respuesta_correcta, explicacion }
 * - { oracion, respuesta_correcta, explicacion }  (completar)
 * - { columnaA: [...], columnaB: [...], solucion: { ... } } (emparejar)
 * - { titulo, pasos_desordenados: [], orden_correcto: [] } (ordenar)
 * - { pregunta, respuesta_sugerida } (abierta)
 */

export default function ActivityCard({ q, index }) {
  // helpers para mostrar datos de forma segura
  const safe = (k) => q[k] ?? null;

  return (
    <article className="card fade-in" aria-labelledby={`q-${index}`}>
      <header>
        <h3 id={`q-${index}`}>
          {index + 1}. {q.pregunta || q.titulo || q.oracion || "Actividad"}
        </h3>
      </header>

      {/* Opción múltiple / Verdadero-Falso */}
      {Array.isArray(safe("opciones")) && (
        <ul className="options-list">
          {q.opciones.map((op, i) => {
            const isCorrect = op === q.respuesta_correcta || (q.respuesta_correcta === i);
            return (
              <li key={i} className={isCorrect ? "option correct" : "option"}>
                <span>{op}</span>
                {isCorrect && <strong className="badge">✔</strong>}
              </li>
            );
          })}
        </ul>
      )}

      {/* Completar oraciones */}
      {q.oracion && (
        <div className="fill">
          <p className="sentence">{q.oracion}</p>
          {q.respuesta_correcta && <p className="muted small">Respuesta: <strong>{q.respuesta_correcta}</strong></p>}
        </div>
      )}

      {/* Emparejar / relacionar */}
      {Array.isArray(safe("columnaA")) && Array.isArray(safe("columnaB")) && (
        <div className="pairing">
          <div className="cols">
            <div>
              <h4 className="small muted">A</h4>
              <ol>
                {q.columnaA.map((it, i) => <li key={i}>{it}</li>)}
              </ol>
            </div>
            <div>
              <h4 className="small muted">B</h4>
              <ol>
                {q.columnaB.map((it, i) => <li key={i}>{it}</li>)}
              </ol>
            </div>
          </div>

          {q.solucion && (
            <details className="solution">
              <summary>Ver solución</summary>
              <pre>{JSON.stringify(q.solucion, null, 2)}</pre>
            </details>
          )}
        </div>
      )}

      {/* Ordenar pasos */}
      {Array.isArray(safe("pasos_desordenados")) && (
        <div className="ordering">
          <ol>
            {q.pasos_desordenados.map((p, i) => <li key={i}>{p}</li>)}
          </ol>
          {q.orden_correcto && (
            <details className="solution">
              <summary>Ver orden correcto</summary>
              <ol>
                {q.orden_correcto.map((p, i) => <li key={i}>{p}</li>)}
              </ol>
            </details>
          )}
        </div>
      )}

      {/* Pregunta abierta / respuesta sugerida */}
      {q.respuesta_sugerida && (
        <div className="open-answer">
          <p className="muted small">Sugerencia de respuesta:</p>
          <p>{q.respuesta_sugerida}</p>
        </div>
      )}

      {/* Explicación */}
      {q.explicacion && (
        <div className="explicacion">
          💡 <em>{q.explicacion}</em>
        </div>
      )}
    </article>
  );
}
