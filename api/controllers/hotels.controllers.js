var hotelData = require('../data/hotel-data.json');

module.exports.hotelGetAll = function(req, res) {
    console.log("GET the hotels");
    res
        .status(200)
        .json(hotelData);
};