const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: String,
    responsavel: String,
    email: String,
    url: String
});

const organizationModel = mongoose.model('organizacoes', schema);

// exportar modelo
module.exports = organizationModel;