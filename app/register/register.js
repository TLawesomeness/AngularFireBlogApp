'use strict';

angular.module('myApp.register', ['ngRoute', 'firebase'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });
}])

// Register controller
.controller('RegisterCtrl', ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth) {
  var firebaseObj = new Firebase("https://angularfireblogapp.firebaseio.com");
  var auth = $firebaseAuth(firebaseObj);

  $scope.signUp = function() {
    if (!$scope.regForm.$invalid) {
      var email = $scope.user.email;
      var password = $scope.user.password;
      if (email && password) {
        auth.$createUser(email, password)
        .then(function() {
          alert('User creation success');
          $location.path('/home');
        },
        function (error) {
          alert('error');
          $scope.regError = true;
          $scope.regErrorMessage = error.message;
        });
      }
    }
  };
}]);
