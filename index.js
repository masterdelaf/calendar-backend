const express = require("express")
require("dotenv").config()
const cors = require('cors')
const { dbConnection } = require('./database/config')

const app = express()

// Base de datos
dbConnection()

// CORS
app.use(cors())

// Directorio Publico
app.use( express.static('public') )

// Lectura y parseo del body
app.use( express.json() )

// Rutas
app.use('/api/auth', require('./routes/auth'))


const PORT = process.env.PORT || 4000
// Escuchar peticiones
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto ${ PORT }`)
})
