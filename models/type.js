const mongoose = require('mongoose');

const typeSchema = mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true },
    sealing: { type: Number, required: true },
    solidity: { type: Number, required: true },
});

module.exports = mongoose.model('type', typeSchema);