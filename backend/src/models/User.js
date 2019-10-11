const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email : String
})

/* 
 * Exportando esse módulo e passando a criação do Model através do método 'model' 
 * passando como parâmetro o nome da model e o Schema. 
 */
module.exports = mongoose.model('User', UserSchema)