const { Router } = require('express');
const { salesController } = require('../controller');
const { validationsSales } = require('../service');

const router = Router();

router.post('/', validationsSales.validationQuantity, salesController.registerSalesController);

router.get('/', salesController.getAllSalesController);

router.get('/:id', salesController.getSaleByIdController);

module.exports = router;
