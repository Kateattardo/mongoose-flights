const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//ticket Schema
const ticketSchema = new Schema({
    seat: {
        type: String,
        required: true,
        match: /[A-F][0-9]{1,2}/,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight',
        require: true
    }
});
module.exports = mongoose.model('Ticket', ticketSchema);