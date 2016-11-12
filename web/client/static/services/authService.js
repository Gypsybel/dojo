app.service('authService', ['lock', 'authManager', '$rootScope', function(lock, authManager, $rootScope) {
  function login() {
    lock.show();
  }

  function logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    authManager.unauthenticate();
    userProfile = {};
    $http({
      url: '/logout',
      method: 'get'
    }).then(function(response) {
      if(response.data.loggedOut) {
        $location.url('');
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
        }

        console.log(profile);

        localStorage.setItem('profile', JSON.stringify(profile));
        $rootScope.$broadcast('userProfileSet', profile);
      });
    });
  }

  return {
    login: login,
    logout: logout,
    registerAuthenticationListener: registerAuthenticationListener
  }
}]);