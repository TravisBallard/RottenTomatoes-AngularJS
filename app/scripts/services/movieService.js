'use strict';
angular.module('rottentomatoes2App')

	.factory('movieService', function($http, $window){

		var factory = {};
			factory.movies = [];

		function getMovies() {
			return $http
					//.get('http://localhost:8888/rottentomatoes-angular/dist/api/ajax.php')
					.get('api/ajax.php')
					.then(function(r){
						factory.movies = r.data.movies;
						return factory.movies;
					});
		}

		function getMovie(id) {
			return getMovies().then(function(r){
				factory.movies = r;
				return $window._.find(factory.movies, {id: id});
			});
		}

		return {
			getMovies: getMovies,
			getMovie: getMovie
		};

	});