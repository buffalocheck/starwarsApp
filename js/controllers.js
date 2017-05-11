var controllers = angular.module("StarWarsCtrls", ["StarWarsServices"]);


controllers.controller('HomeCtrl', ['$scope', 'FilmsFactory', function($scope, FilmsFactory) {
    // console.log('controller is connected');
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
            $scope.films = [data];
            $scope.loading = false;
        }, function error(data) {
            console.log('error');
            $scope.loading = false;
        });
    };
}]);

controllers.controller("FilmShowCtrl", ["$scope", "$stateParams", "FilmsFactory", function($scope, $stateParams, FilmsFactory) {
    $scope.film = {};
    FilmsFactory.get({ id: $stateParams.id }, function success(data) {
        $scope.film = data;
    })

}])
