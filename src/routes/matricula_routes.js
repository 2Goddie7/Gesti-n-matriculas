import { Router } from "express";
import {crearMatricula,listarMatriculas,obtenerMatricula,actualizarMatricula,eliminarMatricula} from "../controllers/matricula_controller.js";
import autorizacion from "../middleware/JWT.js";
import { validarCrearMatricula } from "../middleware/validarCampos.js";

const router = Router();

router.post("/", autorizacion, validarCrearMatricula, crearMatricula);
router.get("/", autorizacion, listarMatriculas);
router.get("/:id", autorizacion, obtenerMatricula);
router.put("/:id", autorizacion, validarCrearMatricula, actualizarMatricula);
router.delete("/:id", autorizacion, eliminarMatricula);

export default router;
