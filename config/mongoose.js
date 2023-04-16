const mongooose = require('mongoose');
// -----------connection to mongodb-------------------//
mongooose.connect('mongodb+srv://nutankumari211:nutan%40123%40@cluster0.pmxpstx.mongodb.net/?retryWrites=true&w=majority');
// mongooose.connect('mongodb://localhost/HospitalAPI');

// ---------------establish connection---------------//
const db = mongooose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));
// ----------if db is connected --------------//
db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;