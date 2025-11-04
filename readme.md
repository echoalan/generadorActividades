# 🚀 Generador de Actividades Educativas

![Node.js](https://img.shields.io/badge/Node.js-v18-green?logo=node.js)
![React](https://img.shields.io/badge/React-v18-blue?logo=react)
![AI21](https://img.shields.io/badge/AI21-API-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Descripción

Generador de actividades educativas dinámicas utilizando inteligencia artificial (AI21 Studio).  
Permite crear automáticamente ejercicios de distintos tipos (opción múltiple, verdadero/falso, completar, relacionar, ordenar y pregunta abierta) para estudiantes según tema, nivel y dificultad.  

Ideal para docentes, creadores de contenido educativo y plataformas e-learning.

---

## ⚡ Características

- 🌟 Generación automática de ejercicios educativos.
- 📝 Soporta múltiples tipos de preguntas.
- 🎯 Personalización por nivel y dificultad.
- 🚀 Integración rápida con cualquier proyecto front-end.

---

## 🛠 Tecnologías

- **Backend:** Node.js, Express  
- **Frontend:** React  
- **Inteligencia Artificial:** AI21 Studio (gpt-4o)  
- **Otros:** dotenv, node-fetch, cors

---

## 🖥 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/echoalan/generadorActividades.git
   cd generadorActividades/saas-backend
2. Instalar dependencias
    ```bash
    npm install
3. Crear un archivo .env en la raiz del backend con tu api key de AI21
    ```bash
    AI21_API_KEY=tu_api_key_aqui
    PORT=5000



## 💻 Uso

### Generar Actividad

POST /api/actividades/generar

Body:
    {
      "tema": "Historia de Roma",
      "tipo": "opcion-multiple",
      "numPreguntas": 5,
      "nivel": "secundario",
      "dificultad": "media"
    }

Respuesta:
    {
      "runId": "abc123"
    }

### Obtener Resultado

GET /api/actividades/resultado/:runId

Respuesta (cuando está completado):


## 🏗 Contribuir

1. Hacer fork del proyecto
2. Crear una rama con la funcionalidad: git checkout -b feature/nueva-funcion.
3. Hacer commit de tus cambios: git commit -m "Agrega nueva funcionalidad".
4. Push a tu fork: git push origin feature/nueva-funcion.
5. Abrir un Pull Request.