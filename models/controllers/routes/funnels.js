const express = require('express');
const router = express.Router();
const controller = require('../controllers/funnelController');

router.post('/generate', controller.generateFunnel);
router.post('/', controller.createFunnel);
router.get('/:id', controller.getFunnel);
router.put('/:id', controller.updateFunnel);
router.delete('/:id', controller.deleteFunnel);

module.exports = router;
