// Importação do módulo 'multer' que vai auxiliar no upload de imagens
const multer = require('multer')

// Importação do módulo 'path' para facilitar a localização de arquivos e pastas e seus atributos. 
const path = require('path')

module.exports = {
    // Utilizando o método 'diskStorage' para armazenar o upload no disk dessa aplicação
    storage: multer.diskStorage({
        /*
         * Configuração do local onde o arquivos será salvo.
         * Utilizando o método 'resolve' para facilitar a localização da pasta 'uploads'.
         */
        destination : path.resolve(__dirname, '..', '..', 'uploads'),
        filename : (req, file, callback) => {
            /*
             * Utilizando uma função de callback para retornar o nome do arquivo.
             * Ele será composto pelo nome original 'basename';
             * Data que foi gravado no disco;
             * extensão original 'extname'
             */

            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)

            callback(null, `${name}-${Date.now()}${ext}`)
        }
    })
}