'use strict';

angular.module('myApp.addPost', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPost', {
    templateUrl: 'addPost/addPost.html',
    controller: 'AddPostCtrl'
  });
}])

.controller('AddPostCtrl', ['$scope', '$firebase', function($scope, $firebase) {
  $scope.AddPost = function() {
    var firebaseObj = new Firebase("https://angularfireblogapp.firebaseio.com");
    var fb = $firebase(firebaseObj);

    var title = $scope.article.title;
    var post = $scope.article.post;

    fb.$push({
      title: title,
      post: post
    }).then(function(ref) {
      console.log(ref);
    }, function(error) {
      console.log("Error:", error);
    });
  }

}]);
