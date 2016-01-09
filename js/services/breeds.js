puppyShelter.factory('breeds', ['$http', function($http) {

  var breeds = {};

  breeds.grabBreeds = function() {
    return $http({
      method: 'GET',
      url: 'https://pacific-stream-9205.herokuapp.com/breeds.json'
    });
  };

  return breeds;

}]);