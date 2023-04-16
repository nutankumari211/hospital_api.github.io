const mongoose = require('mongoose');

//defining the structure and property of the document in the MongoDB collection
const docSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
})

const Doctor = mongoose.model("Doctor", docSchema);

module.exports = Doctor;