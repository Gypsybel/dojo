app.factory('usersFactory', ['$http', function($http) {
  var currentUser = {};
  return {
    login: function(user, callback) {
      $http({
        url: '/login',
        method: 'post',
        data: user
      }).then(function(response) {
        currentUser = response.data.user;
        callback(response);
      });
    },
    getCurrentUser: function(callback) {
      if(currentUser.name === undefined) {
        $http({
          url: '/current_user',
          method: 'get'
        }).then(function(res) {
          callback(res.data);
        });
      } else {
        callback({ user: currentUser });
      }
    },
    logout: function() {
      currentUser = {};
    }
  }
}]);