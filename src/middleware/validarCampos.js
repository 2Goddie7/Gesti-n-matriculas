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
  check("email").isEmail().withMessage("El correo no es valido"),
  check("password").isLength({ min: 6 }).withMessage("La contraseña debe tener mínimo 6 caracteres"),
  validarCampos
];

export const validarLoginUsuario = [
  check("email").isEmail().withMessage("Correo inválido"),
  check("password").notEmpty().withMessage("Contraseña obligatoria"),
  validarCampos
];

// Estudiantes
export const validarCrearEstudiante = [
  check("nombre").notEmpty().withMessage("EL nombre es obligatorio"),
  check("apellido").notEmpty().withMessage("El apellido obligatorio"),
  check("cedula").isLength({ min: 10, max: 10 }).withMessage("La cédula debe ser de 10 digitos"),
  check("email").isEmail().withMessage("Correo no valido"),
  validarCampos
];

// Materias
export const validarCrearMateria = [
  check("nombre").notEmpty().withMessage("El nombre de la materia es obligatorio"),
  check("codigo").notEmpty().withMessage("El codigo de la materia es obligatorio"),
  check("creditos").isInt({ min: 1 }).withMessage("Los créditos deben ser positivo"),
  validarCampos
];

// Matrículas
export const validarCrearMatricula = [
  check("codigo").notEmpty().withMessage("Código obligatorio!"),
  check("estudiante").notEmpty().withMessage("Debe indicar el estudiante"),
  check("materia").notEmpty().withMessage("Debe indicar la materia"),
  validarCampos
];

