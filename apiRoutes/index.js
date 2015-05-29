(function() {
    'use strict';
    var util = require('util');
    var express = require('express');
    var HomeController = require('../controllers/HomeController')();
    var HomeRoutes = express.Router();
    //console.log(util.inspect(HomeController, {showHidden: false, depth: null}));
    HomeRoutes.get('/', HomeController.home);
    module.exports = HomeRoutes;
})()