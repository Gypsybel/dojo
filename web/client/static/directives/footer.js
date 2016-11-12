app.directive('footer', function () {
  return {
    restrict: 'A', //This means that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
    replace: true,
    templateUrl: "/partials/footer.html",
    controller: ['$scope', function ($scope) {
      
    }]
  }
});