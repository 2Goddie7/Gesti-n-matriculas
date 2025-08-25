import { Router } from "express";
import { registro, login } from "../controllers/usuario_controller.js";
import { validarRegistroUsuario, validarLoginUsuario } from "../middleware/validarCampos.js";

const router = Router();

router.post("/registro", validarRegistroUsuario, registro);
router.post("/login", validarLoginUsuario, login);

export default router;
