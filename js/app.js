console.log("JS is firing");
var app = angular.module('StarWarsApp', ['ngResource']);

app.factory('Films', ['$resource', function($resource) {

    var url = 'http://swapi.co/api/films/:id';

    return $resource(url, {}, {
        query: { isArray: false }
    });
}]);

app.controller('HomeCtrl', ['$scope', 'FilmsFactory', function($scope, FilmsFactory) {
    $scope.movieId = 1;
    $scope.films = [];
    $scope.loading = false;

    $scope.getAll = function() {
        $scope.loading = true;
        FilmsFactory.query(function success(data) {
            $scope.films = data.results;
            $scope.loading = false;
        }, function error(data) {
            console.log('error');
            $scope.loading = false;
        });
    };

    $scope.getMovie = function(id) {
        $scope.loading = true;
        FilmsFactory.get({ id: id }, function success(data) {
            // placing data in an array in order for ng-repeat to work on a single movie
            $scope.films = [data];
            $scope.loading = false;
        }, function error(data) {
            console.log('error');
            $scope.loading = false;
        });
    };
}]);
