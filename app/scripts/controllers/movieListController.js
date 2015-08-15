'use strict';

/**
 * @ngdoc function
 * @name rottentomatoes2App.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the rottentomatoes2App
 */
//angular.module('rottentomatoes2App')
//  .controller( 'movieListController', ['$scope', 'movieFactory', '$location', '$routeParams',
//  	function ($scope, movieFactory, $location, $routeParams) {
//
//		$scope.movies = [];
//		$scope.movie = {};
//
//		getMovies();
//
//		if( typeof $routeParams.movieTitle !== 'undefined' ){
//			getMovie( $routeParams.movieTitle );
//		}
//
//		function getMovies(){
//			//movieFactory.getMovies()
//			//	.success(function(movies){
//			//		$scope.movies = movies;
//			//		console.log(movies);
//			//	});
//
//			$scope.movies = movieFactory.getMovies();
//		}
//
//		function getMovie(title){
//			$scope.movie = movieFactory.getMovie(title);
//			console.log( $scope.movie );
//		}
//
//		$scope.go = function(url){
//			$location.path(url);
//		}
//
//  	}
//  ]);

angular.module('rottentomatoes2App')
	.controller( 'movieListController', ['$scope','$http',function($scope,$http){
		$http.get('api/ajax.php').success(function(r){
			$scope.movies = r.movies;
			console.log('Movies: ', r);
		});
	}]);