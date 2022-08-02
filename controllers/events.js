const { response } = require('express')
const Evento = require('../models/Evento')

const getEventos = ( req, res = response ) => {

    res.status(201).json({
        ok: true, 
        msg: 'getEventos'
    })
}

const crearEvento = async ( req, res = response ) => {

    const evento = new Evento( req.body )

    try {

        evento.user = req.uid
        
        const eventoGuardado = await evento.save()

        res.json({
            ok: true, 
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hubo un problema al crear el evento'
        })
    }

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