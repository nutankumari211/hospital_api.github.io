const mongoose = require('mongoose');

//defining the structure and property of the document in the MongoDB collection
const reportSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    },
    status: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
})
const Report = mongoose.model("Report", reportSchema);

module.exports = Report;