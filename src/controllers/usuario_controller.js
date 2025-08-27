import Usuarios from "../models/Usuarios.js";
import jwt from "jsonwebtoken"

const generarJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const registro = async (req,res)=>{
    //Desestructuracion
    const {nombre,apellido,email,password} = req.body
    //Validación campos vacios
    if (!nombre || !apellido || !email || !password) {
    return res.status(400).json({ msg: "Todos los campos son obligatorios" })
    }
    //Verficiar correo
    const verificarEmailBDD = await Usuarios.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Ese correo ya se encuentra registrado"})
    
    // Crear el nuevo usuario
    const nuevoUsuario = new Usuarios(req.body)
    nuevoUsuario.password = await nuevoUsuario.encryptPassword(password)//encriptar la contraseña
    nuevoUsuario.crearToken()//crea el token
    await nuevoUsuario.save() //se guarda el usuario
    res.status(200).json({msg:"Usuario nuevo creado correctamente!",usuario:{
        nombre: nuevoUsuario.nombre,
        apellido: nuevoUsuario.apellido,
        email: nuevoUsuario.email
    }})
}

const login = async (req, res) => {
  const {email, password} = req.body;

  const usuario = await Usuarios.findOne({ email });
  if (!usuario) return res.status(400).json({ msg: "Usuario o contraseña incorrectos" });

  const passwordCorrecta = await usuario.matchPassword(password);
  if (!passwordCorrecta) return res.status(400).json({ msg: "Usuario o contraseña incorrectos" });

  res.json({
    msg: `Bienvenido - ${usuario.nombre} ${usuario.apellido}`,
    token: generarJWT(usuario._id),
  });
};

export{
    registro,
    login
}
