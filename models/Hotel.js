const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    display_name: {
        type: String,
        required: true
    },
    class: String,
    type: String,
    place_rank: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
