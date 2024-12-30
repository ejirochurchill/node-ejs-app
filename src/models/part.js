const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    partName: {
        type: String,
        required: true
    },
    partNumber: {
        type: String,
        required: true
    },
    purchaseInfo: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    contactDetails: {
        type: String,
        required: false
    }
});

const Part = mongoose.model('Part', partSchema);

module.exports = Part;