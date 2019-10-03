const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" // Referência de qual model é essa informação.
    },
    spot : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spot"
    }
})

/* 
 * Exportando esse módulo e passando a criação do Model através do método 'model' 
 * passando como parâmetro o nome da model e o Schema. 
 */
module.exports = mongoose.model('Booking', BookingSchema)