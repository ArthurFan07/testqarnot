const express = require('express');
const router = express.Router();
const typeCtrl = require('../controllers/type')

router.post('/', typeCtrl.createType);

router.put('/', typeCtrl.modifyType);

router.delete('/', typeCtrl.deleteType);

router.get('/', typeCtrl.getType);

module.exports = router;