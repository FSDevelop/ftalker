/**
 * App file
 * @since October 2016
 */

var app = angular.module('app', ['ngRoute', 'Controllers']);

app.config(['$routeProvider', function($routeProvider) {
    // Route exceptions
    $routeProvider.when('/', {
        templateUrl: 'index.html',
        controller: 'mainController',
    });
}]);
