// import express from "express";
// import dotenv from "dotenv"
const express = require("express")
const dotenv = require("dotenv")

const app = express()

dotenv.config()

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
