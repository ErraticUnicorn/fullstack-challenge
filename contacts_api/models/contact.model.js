const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    phone_number: {type: String, max:100},
    email: {type: String, max:100}
});

module.exports = mongoose.model('Contact', ContactSchema);