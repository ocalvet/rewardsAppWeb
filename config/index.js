(function() {

    'use strict';

    var config = {
        "local": {
            port: 3000
        },
        "stage": {
            port: 4000
        }
    };

    module.exports = function(env) {
        return config[env || process.argv[2]] || config['local'];
    }
})();