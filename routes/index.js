(function() {
    'use strict';
    var util = require('util');
    var express = require('express');
    var HomeController = require('../controllers/HomeController')();
    var UserController = require('../controllers/UserController')();
    var HomeRoutes = express.Router();
    //console.log(util.inspect(HomeController, {showHidden: false, depth: null}));
    HomeRoutes.get('/', HomeController.home);
    HomeRoutes.get('/users', UserController.index);
    module.exports = HomeRoutes;
})()