//Importación de modulos
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import routerUsuarios from './routes/usuario_routes.js'
import routerMaterias from "./routes/materia_routes.js"
import routerEstudiantes from "./routes/estudiante_routes.js"
import routerMatriculas from "./routes/matricula_routes.js"

//Inicalizaciones
const app = express()
dotenv.config()

//Configuraciones
app.set('port',process.env.PORT || 3000)
app.use(cors())

//Middleware
app.use(express.json());

//Rutas
app.get(
    '/', (req,res)=>{
        res.send("Servidor Activo")
})

//Rutas usuarios
app.use('/api',routerUsuarios)
//Rutas materias 
app.use("/api/materias", routerMaterias);
//Rutas estudiantes
app.use("/api/estudiantes", routerEstudiantes);
//Rutas Matriculas
app.use("/api/matriculas", routerMatriculas);

// Para rutas que no existan o que no sean encontradas
app.use((req,res)=>
res.status(404).send("Endpoint no encontrado - 404"))

export default app