var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');

router
    .route('/hotels')
    .get(ctrlHotels.hotelGetAll);

router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelGetOne);

module.exports = router;