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
  /* Root */
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'mainController'
  })
  /* Nav */
  .when('/events', {
    templateUrl: 'partials/events.html',
    controller: 'eventsController'
  })
  .when('/bookClub', {
    templateUrl: 'partials/bookClub.html'
  })
  .when('/games', {
    templateUrl: 'partials/games.html'
  })
  .when('/ninjas', {
    templateUrl: 'partials/ninjas.html'
  })
  .when('/pingPong', {
    templateUrl: 'partials/pingPong.html'
  })
  .when('/timeline', {
    templateUrl: 'partials/timeline.html'
  })
  .when('/projects', {
    templateUrl: 'partials/projects.html'
  })
  .when('/about', {
    templateUrl: 'partials/about.html'
  })
  /* Ninjas */
  .when('/cbaut', {
    templateUrl: 'partials/ninjas/cbaut.html',
    controller: 'cbautController'
  })
  /* If none of these, go back to root */
  .otherwise({
    redirectTo: '/'
  });
});