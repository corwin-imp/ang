



app = angular.module("demo", []);

app.controller("MainController", function($scope, $http){
  
  // the array which represents the list
  $scope.items = ["1. Scroll the list to load more"];
  $scope.loading = true;
  
  // this function fetches a random text and adds it to array
  $scope.more = function(){
    $http({
      method: "GET",
      url: "http://jsonplaceholder.typicode.com/photos"
    }).success(function(data, status, header, config){
      
      // returned data contains an array of 2 sentences
      for(line in data){
        newItem = ($scope.items.length+1)+". "+data[line];
        $scope.items.push(newItem);
      }
      $scope.loading = false;
    });
  };
  
  // we call the function twice to populate the list
  $scope.more();
});

// we create a simple directive to modify behavior of <ul>
app.directive("whenScrolled", function(){
  return{
    
    restrict: 'A',
    link: function(scope, elem, attrs){
    
      // we get a list of elements of size 1 and need the first element
      raw = elem[0];
    
      // we load more elements when scrolled past a limit
      elem.bind("scroll", function(){
        if(raw.scrollTop+raw.offsetHeight+5 >= raw.scrollHeight){
          scope.loading = true;
          
        // we can give any function which loads more elements into the list
          scope.$apply(attrs.whenScrolled);
        }
      });
    }
  }
});











/*
var ImagesApp = angular.module('ImagesApp', ['ngRoute', 'infinite-scroll']);


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

*/