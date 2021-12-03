const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: String,
    responsavel: String,
    email: String,
    url: String,
    endereco: {
        endereco: String,
        bairro: String,
        cidade: String,
        estado: String,
        pais: String,
        local: String
    },
    organizacao_id: String
});

const dojoModel = mongoose.model('dojos', schema);

// exportar modelo
module.exports = dojoModel;