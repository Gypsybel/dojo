app.factory('ninjasFactory', ['$http', function($http) {
  return {
    getAllUsers: function(callback) {
      $http({
        url: '/getAllUsers',
        method: 'get'
      }).then(function(res) {
        callback(res.data);
      });
    }
  }
}])