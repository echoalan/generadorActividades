import React from "react";
import ActivityForm from "./components/ActivityForm";
import ActivityResults from "./components/ActivityResults";
import { useGenerateActivity } from "./hooks/useGenerateActivity";

export default function App() {
  const {
    generarActividad,
    resultado,
    loading,
    error,
    clearError
  } = useGenerateActivity();

  return (
    <div className="app">
      <header className="topbar">
        <h1>🎓 Generador de Actividades Educativas</h1>
      </header>

      <main className="container">
        <ActivityForm
          onGenerate={generarActividad}
          loading={loading}
          error={error}
          clearError={clearError}
        />

        <ActivityResults loading={loading} resultado={resultado} />
      </main>

      <footer className="footer">
        Hecho con ❤️ — Potenciado con AI21 Studio (MVP)
      </footer>
    </div>
  );
}
