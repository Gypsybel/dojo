app.factory('mainFactory', ['$http', function($http) {
  return {
    index: function(callback) {
      $http({
        url: '/',
        method: 'get'
      }).then(callback);
    },
    getWeather: function(callback) {
      $http({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Burbank,USA&units=imperial&appid=1e5bdcf4b516db11e65309fe401f53a2',
        method: 'get'
      }).then(callback);
    }
  }
}]);