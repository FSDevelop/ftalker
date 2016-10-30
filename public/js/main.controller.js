/**
 * Main Angular controller
 * @author  Federico Sosa (federico.sosa@modelit.xyz)
 * @since   September 2016
 */
 
var Controllers = angular.module('app', []);

Controllers.controller('mainController', ['$scope', '$http', function($scope, $http) {
    /**
     * Send message to server
     */
    $scope.sendMessage = function() {
        $http({
            "url": "/message",
            "method": "POST",
            "data": $scope.message
        }).success(function(response) {
            
        });
    };
}]);
