// Front End Routing
var app = angular.module('dojoAfterDark', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
/**
  * 0CB;
  * To be implimented
  *
  $httpProvider.interceptors.push(
    function($q, $location) {
      return {
        'responseError': function(rejection) {
          if (rejection.status === 401) {
            $location.url('/');
          }
          return $q.reject(rejection);
        }
      }
    }
  );
*/
  $routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'mainController'
  })
  .when('/cbaut', {
    templateUrl: 'partials/cbaut.html',
    controller: 'cbautController'
  })
  .otherwise({
    redirectTo: '/'
  });
});