app.service('authService', ['lock', 'authManager', '$rootScope', '$http', '$location', 'usersFactory', function(lock, authManager, $rootScope, $http, $location, usersFactory) {
  function login() {
    lock.show();
  }

  function logout(callback) {
    localStorage.removeItem('id_token');
    authManager.unauthenticate();
    $http({
      url: '/logout',
      method: 'get'
    }).then(function(response) {
      if(response.data.loggedOut) {
        usersFactory.logout();
        $location.url('');
        callback();
      }
    });
  }

  // Set up the logic for when a user authenticates
  // This method is called from app.run.js
  function registerAuthenticationListener() {
    lock.on('authenticated', function (authResult) {
      localStorage.setItem('id_token', authResult.idToken);
      authManager.authenticate();

      lock.getProfile(authResult.idToken, function(error, profile) {
        if (error) {
          console.log(error);
        } else {
          $rootScope.$broadcast('userProfileSet', profile);
        }
      });
    });
  }

  return {
    login: login,
    logout: logout,
    registerAuthenticationListener: registerAuthenticationListener
  }
}]);