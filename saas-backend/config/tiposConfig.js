export const tiposConfig = {
  "opcion-multiple": `
    Cada pregunta debe tener 4 opciones y marcar la correcta.
    Devuelve en JSON:
    [
      { "pregunta": "", "opciones": ["", "", "", ""], "respuesta_correcta": "", "explicacion": "" }
    ]`,

  "verdadero-falso": `
    Cada pregunta debe tener solo dos opciones: Verdadero y Falso.
    Devuelve en JSON:
    [
      { "pregunta": "", "opciones": ["Verdadero", "Falso"], "respuesta_correcta": "", "explicacion": "" }
    ]`,

  "completar": `
    Crea oraciones con un espacio en blanco para completar.
    Devuelve en JSON:
    [
      { "oracion": "La capital de Francia es _____.", "respuesta_correcta": "París", "explicacion": "" }
    ]`,

  "relacionar": `
    Crea pares para relacionar. 
    Devuelve en JSON:
    [
      { "columnaA": ["Mitocondria", "Núcleo", "Cloroplasto"], "columnaB": ["Controla la célula", "Produce energía", "Hace fotosíntesis"], "solucion": { "Mitocondria": "Produce energía", "Núcleo": "Controla la célula", "Cloroplasto": "Hace fotosíntesis" } }
    ]`,

  "ordenar": `
    Genera listas de pasos desordenados que el alumno debe ordenar.
    Devuelve en JSON:
    [
      { "titulo": "Etapas del ciclo del agua", "pasos_desordenados": ["Evaporación", "Condensación", "Precipitación"], "orden_correcto": ["Evaporación", "Condensación", "Precipitación"] }
    ]`,

  "pregunta-abierta": `
    Crea preguntas que requieran respuestas desarrolladas breves.
    Devuelve en JSON:
    [
      { "pregunta": "Explica brevemente qué es la fotosíntesis.", "respuesta_sugerida": "La fotosíntesis es el proceso...", "explicacion": "" }
    ]`,
};
