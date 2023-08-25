const mongoose = require('mongoose');

//shortcut to Schema class part of model when using Mongoose
const Schema = mongoose.Schema;

//rules for flights
const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United','Delta'] 
    },
    airport: {
        type: String,
        required: true,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departure: {
        type: Date,
        required: true
    },
    destinations:[
        {
        airport: {
            type: String,
            required: true,
            enum: ['DEN', 'ATL', 'LAX', 'JFK', 'SAN']
        },
        arrivals: {
            type: Date,
            required: true
        }
    }
    ]
}, {
    timestamps: true
});






module.exports = mongoose.model('Flight', flightSchema);
