'use strict';
angular
	.module('rottentomatoes2App')
	.controller( 'movieDetailController', ['$scope', '$routeParams', 'movieService',
		function($scope, $routeParams, movieService){
			$scope.movie = movieService.getMovie($routeParams.id).then(function(r){
				$scope.movie = r;
				console.log(r);
			});

			$scope.page = 'detail';
		}
	]);