app.controller('ninjasController', ['$scope', 'ninjasFactory', function($scope, ninjasFactory){
  $scope.users = [];
  ninjasFactory.getAllUsers(function(users){
    $scope.users = users;
  });
}]);