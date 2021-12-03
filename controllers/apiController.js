const organizationModel = require('../models/OrganizationModel');
const dojoModel = require('../models/DojoModel');

exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

exports.listOrganizations = async function (req, res, next) {
    organizationModel.find().sort({nome: 1}).then(async docs => {
        res.send({ docs });
    }).catch(next);
};

exports.getOrganization = async (req, res, next) => {
    organizationModel.findOne({ _id: req.params.id }).then(doc => {
        res.send(doc);
    })
}

exports.insertOrganization = function (req, res, next) {
    const doc = {
        'nome': req.body.nome,
        'responsavel': req.body.responsavel,
        'email': req.body.email,
        'url': req.body.url
    }

    organizationModel.create(doc).then(async function (doc) {
        res.send(doc);
    }).catch(next);
};

exports.updateOrganization = function (req, res, next) {
    const doc = {
        'nome': req.body.nome,
        'responsavel': req.body.responsavel,
        'email': req.body.email,
        'url': req.body.url
    }

    organizationModel.findByIdAndUpdate({ _id: req.params.id }, doc)
        .then(function () {
            organizationModel.findOne({ _id: req.params.id }).then(function (doc) {
                //res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(doc);
            });
        }).catch(next);
};

exports.deleteOrganization = function (req, res, next) {
    organizationModel.findByIdAndRemove({ _id: req.params.id }).then(function (doc) {
        res.send(doc);
    }).catch(next);
};

exports.listDojos = async function (req, res, next) {
    dojoModel.find({organizacao_id: req.params.id}).sort({nome: 1}).then(async docs => {
        res.send({ docs });
    }).catch(next);
};
