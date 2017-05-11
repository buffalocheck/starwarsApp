var services = angular.module("StarWarsServices", ["ngResource"]);

services.factory('FilmsFactory', ['$resource', function($resource) {
    var url = 'http://swapi.co/api/films/:id';
    return $resource(url, {}, {
        query: { isArray: false }
    });
}]);
