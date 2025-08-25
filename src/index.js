import app from "./server.js"
import connection from "./config/database.js"

app.listen(app.get('port'),()=>{
    console.log(`Servidor funcionando en el puerto → ${app.get('port')}`)
})

connection()