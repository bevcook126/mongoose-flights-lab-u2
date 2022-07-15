const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let date = new Date()
            let day = date.getDate();
            let month = date.getMonth()+1;
            let year = date.getFullYear()+1;
            let fullDate = `${day}.${month}.${year}.`;
            return fullDate
        }
    }


});

module.exports = mongoose.model('Flight', flightSchema);
