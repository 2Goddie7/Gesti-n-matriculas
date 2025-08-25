import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    apellido:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
    collection:'usuarios'
});

//cifrar contraseña
usuarioSchema.methods.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

//Verificar contraseña
usuarioSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

//Generar Token
usuarioSchema.methods.crearToken = function () {
    const tokenGenerado = this.token = Math.random().toString(36).slice(2)
    return tokenGenerado
}

export default model('Usuario', usuarioSchema)