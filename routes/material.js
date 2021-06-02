const express = require('express');
const router = express.Router();
const materialCtrl = require('../controllers/material')

router.post('/', materialCtrl.createMaterial);

router.put('/', materialCtrl.modifyMaterial);

router.delete('/', materialCtrl.deleteMaterial);

router.get('/', materialCtrl.getMaterial);

module.exports = router;