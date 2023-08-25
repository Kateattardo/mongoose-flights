const mongoose = require('mongoose')
const Schema = mongoose.Schema
const destinationSchema = new Schema({
    airport: {
        type: String,
        required: true,
        enum: ['DEN', 'ATL', 'LAX', 'JFK', 'SAN']
    },
    arrivals: {
        type: Date,
        required: true
    }
});
module.exports = mongoose.model('destinations', destinationSchema)