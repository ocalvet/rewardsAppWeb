(function(ng) {

    'use strict';

    ng.module('rewardsApp')
        .controller('HomeCtrl', ['$scope', function($scope) {
            $scope.title = "This is angular";
        }]);

})(angular);