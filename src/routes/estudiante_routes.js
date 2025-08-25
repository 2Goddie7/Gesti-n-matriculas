import { Router } from "express";
import {crearEstudiante,listarEstudiantes,obtenerEstudiante,actualizarEstudiante,eliminarEstudiante} from "../controllers/estudiante_controller.js";
import autorizacion from "../middleware/JWT.js";
import { validarCrearEstudiante } from "../middleware/validarCampos.js";

const router = Router();

router.post("/", autorizacion,validarCrearEstudiante, crearEstudiante);
router.get("/", autorizacion, listarEstudiantes);
router.get("/:id", autorizacion, obtenerEstudiante);
router.put("/:id", autorizacion, validarCrearEstudiante, actualizarEstudiante);
router.delete("/:id", autorizacion, eliminarEstudiante);

export default router;
