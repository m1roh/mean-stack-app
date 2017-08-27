var hotelData = require('../data/hotel-data.json');

module.exports.hotelGetAll = function(req, res) {
    console.log("GET the hotels");
    res
        .status(200)
        .json(hotelData);
};

module.exports.hotelGetOne = function(req, res) {
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[hotelId];
    console.log("GET hotelId", hotelId);
    res
        .status(200)
        .json(thisHotel);
};