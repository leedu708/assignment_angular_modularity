puppyShelter.factory('puppies',['$http', function($http) {

  var puppies = {};

  puppies.grabPuppies = function() {
    return $http({
      method: 'GET',
      url: 'https://pacific-stream-9205.herokuapp.com/puppies.json'
    });
  };

  puppies.create = function(newPuppy) {
    return $http({
      method: 'POST',
      url: 'https://pacific-stream-9205.herokuapp.com/puppies.json',
      data: JSON.stringify(newPuppy)
    });
  };

  puppies.destroy = function(id) {
    return $http({
      method: 'DELETE',
      url: "https://pacific-stream-9205.herokuapp.com/puppies/" + id + ".json"
    });
  };

  return puppies;

}]);