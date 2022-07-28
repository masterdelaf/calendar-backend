const { response } = require('express')

const getEventos = ( req, res = response ) => {

    res.status(201).json({
        ok: true, 
        msg: 'getEventos'
    })
}

const crearEvento = ( req, res = response ) => {

    res.status(201).json({
        ok: true, 
        msg: 'CrearEventos'
    })
}

const actualizarEvento = ( req, res = response ) => {

    // const { id } = req.params
    // console.log( id )

    res.status(201).json({
        ok: true, 
        msg: 'ActualizarEventos'
    })
}

const eliminarEvento = ( req, res = response ) => {

    res.status(201).json({
        ok: true, 
        msg: 'EliminarEventos'
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}