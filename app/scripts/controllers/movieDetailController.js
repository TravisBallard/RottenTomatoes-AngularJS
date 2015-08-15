'use strict';
angular.module('rottentomatoes2App')
	.controller( 'movieDetailController', ['$scope', '$routeParams', 'movieFactory',
		function($scope, $routeParams, movieFactory){

			$scope.movie = {};

			function getMovie(title){
				$scope.movie = movieFactory.getMovie(title);
				console.log( $scope.movie );
			}

			getMovie( $routeParams.id );

		}
	]);