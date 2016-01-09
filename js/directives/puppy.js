puppyShelter.directive('puppy', function() {
  return {
    restrict: 'A',
    templateUrl: 'js/directives/puppy.html',
    scope: {
      puppy: '=',
      destroy: '&'
    }
  }
})