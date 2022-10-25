const { Schema, model } = require("mongoose");

const userSchema = Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    typeID: {
        type: Number,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true
    },



})


module.exports = model('User', userSchema);