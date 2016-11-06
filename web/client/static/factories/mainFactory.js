app.factory('mainFactory', ['$http', function($http) {
  return {
    index: function(callback) {
      $http({
        url: '/',
        method: 'get'
      }).then(callback);
    }
  }
}]);