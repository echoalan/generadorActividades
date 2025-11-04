import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import actividadesRoutes from "./routes/actividades.routes.js";

dotenv.config();
console.log("✅ AI21_API_KEY:", process.env.AI21_API_KEY ? "Detectada" : "NO detectada");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/actividades", actividadesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
