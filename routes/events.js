/*
    Rutas de Eventos 
    host + /api/events
*/

const { Router } = require('express')
const { validarJWT } = require('../middlewares/validar-jwt')
const router = Router()

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')

// Todas tienen que pasar por la validacion del JWT
router.use( validarJWT )

// Obtener eventos
router.get('/', getEventos)

// Crear Evento
router.post('/', crearEvento)

// Actualizar Evento
router.put('/:id', actualizarEvento)

// Actualizar Evento
router.delete('/:id', eliminarEvento)

module.exports = router