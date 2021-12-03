const express = require('express');
const router = express.Router();

// importa controlador 'apiController.js' da pasta: 
// ‘../controllers/apiController’
const apiController = require('../controllers/apiController');

router.get('/organizacoes', apiController.listOrganizations);

router.get('/organizacao/:id', apiController.getOrganization);

router.post('/organizacao', apiController.insertOrganization);

router.put('/organizacao/:id', apiController.updateOrganization);

router.delete('/organizacao/:id', apiController.deleteOrganization);

router.get('/dojos/:id', apiController.listDojos)

module.exports = router;