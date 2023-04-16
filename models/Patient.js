const mongoose = require('mongoose');
//defining the structure and property of the document in the MongoDB collection
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Report",
        },
    ],

}, {
    timestamps: true
})

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;