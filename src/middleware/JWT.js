import jwt from "jsonwebtoken";
import Usuarios from "../models/Usuarios.js";

const autorizacion = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ msg: "Acceso denegado. No tienes un token valido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = await Usuarios.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token inválido o expirado" });
  }
};

export default autorizacion;