'use strict';
angular
	.module('rottentomatoes2App')
	.controller( 'movieDetailController', ['$scope', '$routeParams', 'movieService',
		function($scope, $routeParams, movieService){
			$scope.movie = movieService.getMovie($routeParams.id).then(function(r){
				r.runtime = movieService.formatRuntime(r.runtime);
				r.posters.full = movieService.stripFlixster(r.posters.profile);
				$scope.movie = r;
			});

			$scope.page = 'detail';
		}
	]);