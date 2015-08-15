'use strict';
angular
	.module('rottentomatoes2App')
	.controller( 'movieListController', ['$scope', '$location', 'movieService',
		function($scope, $location, movieService){

			$scope.movies = movieService.getMovies().then(function(r){
				$scope.movies = r;
			});

			$scope.go = function(url){
				$location.path(url);
			};

			$scope.page = 'home';
		}
	]);