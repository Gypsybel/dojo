app.factory('usersFactory', ['$http', function($http) {
  var currentUser = {};
  return {
    login: function(user, callback) {
      $http({
        url: '/login',
        method: 'post',
        data: user
      }).then(callback);
    },
    getCurrentUser: function(callback) {
      if(currentUser === undefined) {
        $http({
          url: '/current_user',
          method: 'get'
        }).then(function(res) {
          callback(res.data);
        });
      } else {
        callback({ user: currentUser });
      }
      console.log(currentUser);
    },
    logout: function(callback) {
      $http({
        url: '/logout',
        method: 'get'
      }).then(function(response) {
        user = {};
        callback();
      });
    }
  }
}]);