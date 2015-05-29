(function() {
    'use strict';
    var HomeController = function() {
    }

    HomeController.prototype = function() {
        var index = function(req, res) {
            // Use services to get model to the view
            res.render('home/index', { title: "Ovidio R. Calvet"});
        };

        return {
            home: index
        };
    }();

    module.exports = function() {
        return new HomeController();
    }
})()