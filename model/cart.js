// Importing mongoose
const mongoose = require('mongoose');

// importing Schema
const Schema = mongoose.Schema;

// Setup cart Schema
const cartSchema = new Schema({
    item_id: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

// Creating model using the schema
const Cart = new mongoose.model('Cart', cartSchema);
module.exports = Cart;