import React from "react";
import ActivityCard from "./ActivityCard";

export default function ActivityResults({ resultado, loading }) {
  return (
    <section className="panel results-panel" aria-live="polite">
      {loading && <div className="muted">⏳ Generando actividad... esto puede tardar unos segundos</div>}

      {!loading && (!resultado || resultado.length === 0) && (
        <div className="muted">Generá una actividad para verla aquí.</div>
      )}

      {resultado && resultado.length > 0 && (
        <>
          <h2>Actividades generadas</h2>
          <div className="cards">
            {resultado.map((q, idx) => (
              <ActivityCard key={idx} q={q} index={idx} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
