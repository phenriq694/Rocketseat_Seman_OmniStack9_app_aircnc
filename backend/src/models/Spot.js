const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
    thumbnail : String,
    company : String,
    price : Number,
    techs : [String],
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" // Referência de qual model é essa informação.
    }
})

/* 
 * Exportando esse módulo e passando a criação do Model através do método 'model' 
 * passando como parâmetro o nome da model e o Schema. 
 */
module.exports = mongoose.model('Spot', SpotSchema)