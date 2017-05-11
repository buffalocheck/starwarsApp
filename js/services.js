angular.module("StarWarsServices", []);

app.factory('FilmsFactory', ['$resource', function($resource) {
    var url = 'http://swapi.co/api/films/:id';
    return $resource(url, {}, {
        query: { isArray: false }
    });
}]);
