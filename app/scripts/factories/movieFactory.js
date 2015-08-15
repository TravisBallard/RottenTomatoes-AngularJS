'use strict';
angular.module('rottentomatoes2App')
	.factory('movieFactory', ['$http','$routeParams',function($http, $routeParams){

		var factory = {};
			factory.movie = {};
			//movies = [];

		factory.getMovie = function(){
			$http.get('http://localhost:8888/rottentomatoes-angular/dist/api/ajax.php').success(function(r){
				r.movies.forEach(function(m){
					if(m.id === $routeParams.id){
						return m;
					}
				});
			});

			return null;
		};

	}]);