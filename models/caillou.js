const mongoose = require('mongoose');
const material = require('./material');
const type = require('./type');
const material = require('./material');

const caillouSchema = mongoose.Schema({
    type: { type: type, required: true },
    material: { type: material, required: true },
    dimensions: { type: String, required: true },
    state: { type: String, required: true },
    color: { type: String, required: true },
    weight: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('caillou', caillouSchema);