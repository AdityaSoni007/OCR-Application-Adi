const mongoose = require('mongoose')

const IdSchema = new mongoose.Schema({
    identification_number: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    date_of_birth: {
        type: String,
        required: true
    },

    date_of_issue: {
        type: String,
        required: true
    },

    date_of_expiry: {
        type: String,
        required: true
    },

},{timestamps:true})

module.exports = mongoose.model("IdCard", IdSchema)