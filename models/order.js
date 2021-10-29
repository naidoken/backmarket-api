const mongoose = require('mongoose')
const Address = require('./address')

const orderSchema = new mongoose.Schema({
    order_id: {
        type: Number,
        required: true
    },
    merchant_id: {
        type: Number,
        required: true
    },
    shipping_address: {
        type: Address,
        required: true
    },
    billing_address: {
        type: Address,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shipping_price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    shipper: {
        type: String,
        required: true
    },
    tracking_number: {
        type: String,
        required: true
    },
    tracking_url: {
        type: String,
        required: true
    },
    date_creation: {
        type: Number,
        required: true
    },
    date_modification: {
        type: Number,
        required: true
    },
    date_payment: {
        type: Number,
        required: true
    },
    date_shipping: {
        type: Number,
        required: true
    },
    state: {
        type: Number,
        required: true
    },
    orderlines: {
        type: Number,
        required: true
    },
    country_code: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema)