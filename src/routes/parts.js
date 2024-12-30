const express = require('express');
const PartsController = require('../controllers/partsController');

const router = express.Router();
const partsController = new PartsController();

router.get('/parts/add', partsController.addPart.bind(partsController));
router.post('/parts', partsController.createPart.bind(partsController));
router.get('/parts/edit/:id', partsController.editPart.bind(partsController));
router.post('/parts/edit/:id', partsController.updatePart.bind(partsController));
router.get('/parts', partsController.listParts.bind(partsController));
router.post('/parts/delete/:id', partsController.deletePart.bind(partsController));

module.exports = router;