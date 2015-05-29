(function() {
    'use strict';
    var UserController = function() {
    }

    UserController.prototype = function() {
        var index = function(req, res) {
            // Use services to get model to the view
            res.render('user/index', { title: "This is the users page"});
        };

        return {
            index: index
        };
    }();

    module.exports = function() {
        return new UserController();
    }
})()