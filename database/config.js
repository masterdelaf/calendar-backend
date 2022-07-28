const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' })

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('DB Online')

    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de incializar la BD')
    }
}

module.exports = {dbConnection}