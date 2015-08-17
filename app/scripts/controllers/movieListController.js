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
			$scope.bgcolors = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7'];
		}
	]);