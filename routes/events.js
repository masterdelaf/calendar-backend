/*
    Rutas de Eventos 
    host + /api/events
*/

const { Router } = require('express')
const { check } = require('express-validator')

const { isDate } = require('../helpers/isDate')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')
const router = Router()

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')

// Todas tienen que pasar por la validacion del JWT
router.use( validarJWT )

// Obtener eventos
router.get('/', getEventos)

// Crear Evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio no es correcta').custom( isDate ),
        check('end', 'La fecha de finalización no es correcta').custom( isDate ),
        validarCampos
    ],
     crearEvento
)

// Actualizar Evento
router.put('/:id', actualizarEvento)

// Actualizar Evento
router.delete('/:id', eliminarEvento)

module.exports = router