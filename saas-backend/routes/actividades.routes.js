import express from "express";
import { generarActividad, obtenerResultado } from "../controllers/actividades.controller.js";

const router = express.Router();

// POST /api/actividades/generar
router.post("/generar", generarActividad);

// GET /api/actividades/resultado/:runId
router.get("/resultado/:runId", obtenerResultado);

export default router;
