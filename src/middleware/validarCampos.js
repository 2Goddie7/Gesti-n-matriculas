import { check, validationResult } from "express-validator";

export const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

// Usuarios
export const validarRegistroUsuario = [
  check("nombre").notEmpty().withMessage("Nombre obligatorio")
    .isLength({ max: 20 }).withMessage("Nombre demasiado largo"),
  check("apellido").notEmpty().withMessage("Apellido obligatorio")
    .isLength({ max: 20 }).withMessage("Apellido demasiado largo"),
  check("email").isEmail().withMessage("Correo inválido"),
  check("password").isLength({ min: 8 }).withMessage("La contraseña debe tener mínimo 8 caracteres"),
  validarCampos
];

export const validarLoginUsuario = [
  check("email").isEmail().withMessage("Correo inválido"),
  check("password").notEmpty().withMessage("Contraseña obligatoria"),
  validarCampos
];

// Estudiantes
export const validarCrearEstudiante = [
  check("nombre").notEmpty().withMessage("Nombre obligatorio"),
  check("apellido").notEmpty().withMessage("Apellido obligatorio"),
  check("cedula").isLength({ min: 10, max: 10 }).withMessage("Cédula debe tener 10 dígitos"),
  check("email").isEmail().withMessage("Correo inválido"),
  validarCampos
];

// Materias
export const validarCrearMateria = [
  check("nombre").notEmpty().withMessage("Nombre obligatorio"),
  check("codigo").notEmpty().withMessage("Código obligatorio"),
  check("creditos").isInt({ min: 1 }).withMessage("Créditos debe ser un número positivo"),
  validarCampos
];

// Matrículas
export const validarCrearMatricula = [
  check("codigo").notEmpty().withMessage("Código obligatorio"),
  check("estudiante").notEmpty().withMessage("Debe indicar estudiante"),
  check("materia").notEmpty().withMessage("Debe indicar materia"),
  validarCampos
];

