const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    company: {
        type: String,
    },
    last_name: {
        type: String,
    },
    first_name: {
        type: String,
    },
    gender: {
        type: Number,
    },
    street: {
        type: String,
    },
    street2: {
        type: String,
    },
    postal_code: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
})

module.exports = mongoose.model('Address', addressSchema)