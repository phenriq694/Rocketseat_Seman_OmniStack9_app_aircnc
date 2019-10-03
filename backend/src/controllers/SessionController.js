const User = require('../models/User')

// Métodos de um controller: in dex, store, show, update, destroy

module.exports = {
    // Criar uma sessão
    async store(req, res) {
        // Atribuido o valor req.body.email na variável email usando desestruturação.
        const { email }  = req.body

        // Utilizando o método 'findOne' para verificar se o e-mail já existe no banco...
        let user = await User.findOne({ email })
        
        // Caso não existir, será cadastrado. 
        if(!user) {
            const user = await User.create({ email })
        }

        return res.json(user)
    }
}