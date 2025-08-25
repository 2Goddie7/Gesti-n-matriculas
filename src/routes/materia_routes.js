import { Router } from "express";
import { crearMateria, listarMaterias, obtenerMateria, actualizarMateria, eliminarMateria } from "../controllers/materia_controller.js";
import autorizacion from "../middleware/JWT.js";
import { validarCrearMateria } from "../middleware/validarCampos.js";

const router = Router();

router.post("/", autorizacion, validarCrearMateria, crearMateria);
router.get("/", autorizacion, listarMaterias);
router.get("/:id", autorizacion, obtenerMateria);
router.put("/:id", autorizacion, validarCrearMateria, actualizarMateria);
router.delete("/:id", autorizacion, eliminarMateria);

export default router;
