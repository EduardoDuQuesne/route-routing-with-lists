/*jshint esversion: 6 */

angular.module("RouteApp")
    .controller('HomeCtrl', function ($scope) {

        $scope.highwayLinks= [{
                name: "Pacific Coast Highway",
                url: 'pacific-coast-highway'
            },
            {
                name: 'Extraterrestrial Highway',
                url: 'alien-highway'
            }
        ];
    });