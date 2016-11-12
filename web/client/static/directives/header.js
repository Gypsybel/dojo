app.directive('header', function () {
  return {
    restrict: 'A', //This means that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
    replace: true,
    // scope: { user: '=' }, // This is one of the cool things :). Will be explained in post.
    templateUrl: "/partials/header.html",
    controller: ['$scope', '$filter', 'authService', 'usersFactory', '$location', function ($scope, $filter, authService, usersFactory, $location) {
      $scope.login = authService.login;
      $scope.logout = function() {
        authService.logout(function() {
          $scope.user = {};
          $location.url('');
        });
      };

      $scope.user = {};

      usersFactory.getCurrentUser(function(response) {
        $scope.user = response.user;
      });

      $scope.$on('userProfileSet', function(event, profile) {
        usersFactory.login(profile, function(response) {
          if(response.data.user) {
            $scope.user = response.data.user;
            $location.url('events');
          }
        });
      });
    }]
  }
});