puppyShelter.controller('ShelterCtrl', ['$scope', 'breeds', 'puppies',
                                         function($scope, breeds, puppies) {

  $scope.sort = "created_at";
  $scope.sortReverse = true;
  
  // grab breed options
  breeds.grabBreeds().then( function(response) {
    $scope.breeds = response.data;
  }, function(reponse) {
    console.log('error');
  });

  // grab puppies available for adoption
  puppies.grabPuppies().then( function(response) {
    $scope.puppies = response.data;
  }, function(response) {
    console.log('error');
  });

  $scope.createPuppy = function(newPuppy) {
    puppies.create(newPuppy).then( function(response) {
      $scope.renderSinglePuppy(response.data);
      $scope.newPuppy = null;
    }, function(response) {
      console.log('error creating puppy');
    });
  };

  $scope.renderSinglePuppy = function(puppy) {
    puppy.breed = { name: $scope.breedName(puppy.breed_id) };
    $scope.puppies.push(puppy);
  };

  $scope.breedName = function(id) {
    return $scope.breeds.filter(function(breed) {
      return (breed.id === id)
    })[0].name;
  };

  $scope.destroy = function(puppy) {
    puppies.destroy(puppy.id).then( function(response) {
      var index = $scope.puppies.indexOf(puppy);
      $scope.puppies.splice(index, 1);
    }, function(response) {
      console.log('error deleting puppy');
    });
  };

  $scope.toggleSort = function(option) {
    if (option === $scope.sort) {
      $scope.sortReverse ^= true;
    } else {
      $scope.sort = option;
      $scope.sortReverse = false;
    };
  };

}]);