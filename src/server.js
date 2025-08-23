//Importación de modulos
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

//Inicalizaciones
const app = express()
dotenv.config()

//Configuraciones
app.set('port',process.env.PORT || 3000)
app.use(cors())

//Middleware

//Rutas
app.get(
    '/', (req,res)=>{
        res.send("Servidor Activo")
    }
)

//Exportar la instancia
export default app