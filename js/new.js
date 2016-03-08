'use strict';




var ImagesApp = angular.module('ImagesApp', ['ngRoute', 'infinite-scroll']);

ImagesApp.config(['$routeProvider', function($routeProvide) {

$routeProvide
.when('/', {
	templateUrl: 'templates/home.html',
	controller: 'ImagesListCtrl'
})
.when('/images/albums/:imageAlbumId', {
	templateUrl: 'templates/album-detail.html',
	controller: 'AlbumDetailCtrl'
})
.when('/popular', {
	templateUrl: 'templates/popular.html',
	controller: 'UsersListCtrl'
})
.when('/images/:imageId', {
	templateUrl: 'templates/image-detail.html',
	controller: 'ImageDetailCtrl'
})
.when('/albums', {
	templateUrl: 'templates/albums.html',
	controller: 'AlbumsListCtrl'
})
.otherwise({
	redirectTo: '/'
});

}]);

ImagesApp.controller('ImagesListCtrl' , ['$scope', '$http', '$location', function($scope, $http, $location) {

$scope.items = ['1. Scroll the list load more'];
$scope.loading = true;

$scope.more = function() {
	$http({
		method: "GET",
		url: 'http://jsonplaceholder.typicode.com/photos'
	}).success(function(data)){
		newItem = ($scope.items.length + 1)+". " data[line];
		$scope.items.push();
	}
	$scope.loading = false;
});
};
$scope.more();
});
	$scope.title = 'Image servise';
	$http({
		method: 'GET',
		url: 'http://jsonplaceholder.typicode.com/photos'
	}).success(function(data){
		console.log("receive_images");
		$scope.images = data;

		});
	
	
}]);

ImagesApp.controller('AlbumDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
$scope.imageAlbumId = $routeParams.imageAlbumId;
var urlAlb = 'http://jsonplaceholder.typicode.com/albums/'+$routeParams.imageAlbumId+'/photos';
$http.get(urlAlb).success(function(data) {
	console.log("get_albums!!");
	$scope.album_images = data;
});

}]);

ImagesApp.controller('UsersListCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
$http({
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/users'
  }).success(function(data) {
      console.log("get_users");
      $scope.users = data;
    });

}]);

ImagesApp.controller('ImageDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
	$scope.imageId = $routeParams.imageId;
	var urlImg = 'http://jsonplaceholder.typicode.com/photos/'+$routeParams.imageId+'';
	$http.get(urlImg).success(function(data) {
	$scope.image = data;
});
}]);

ImagesApp.controller('AlbumsListCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
	$scope.albumId = $routeParams.albumId;
	$http({
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/albums'
  }).success(function(data) {
      console.log("receive_albums");
      $scope.albums = data;
    });
}]);






/*

ImagesApp.controller('ImagesListCtrl' , ['$scope', '$http', '$location', function($scope, $http, $location) {


	$scope.title = 'Image servise';
	$http({
		method: 'GET',
		url: 'http://jsonplaceholder.typicode.com/photos'
	}).success(function(data){
		console.log("receive_images");
		$scope.images = data;

		});
	
	
}]);

*/