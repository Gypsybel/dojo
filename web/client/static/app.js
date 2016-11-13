// Front End Routing
var app = angular.module('app', ['ngRoute', 'auth0.lock', 'angular-jwt']);

app.config(function($routeProvider, lockProvider, $httpProvider) {
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
  // $stateProvider
  // .state('home', {
  //   url: '/home',
  //   controller: 'HomeController',
  //   templateUrl: 'components/home/home.html',
  //   controllerAs: 'vm'
  // });

  lockProvider.init({
    clientID: 'T2rV7cD3BXPYk6MGz7hrWROKcxkB3OVe',
    domain: 'dojo-after-dark.auth0.com'
  });

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
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/bookClub', {
    templateUrl: 'partials/bookClub.html'
  })
  .when('/games', {
    templateUrl: 'partials/games.html'
  })
  .when('/ninjas', {
    templateUrl: 'partials/ninjas.html',
    controller: 'ninjasController'
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