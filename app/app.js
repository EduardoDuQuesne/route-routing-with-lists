/*jshint esversion: 6 */

angular.module("RouteApp", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
        .when('/', {
            templateUrl: 'partials/home-view.html',
            controller: 'HomeCtrl'
        })
        .when('/pacific-coast-highway', {
            templateUrl: "partials/pacific-view.html",
            controller: "PacificCtrl"
        })
        .when('/alien-highway', {
            templateUrl: "partials/alien-view.html",
            controller: "AlienCtrl"
        })
        .otherwise('/');
    });