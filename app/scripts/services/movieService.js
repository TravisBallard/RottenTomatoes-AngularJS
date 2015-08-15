'use strict';
angular
	.module('rottentomatoes2App')
	.factory('movieService', function($http, $window){

		var factory = {};
			factory.movies = [];

		function getMovies() {
			return $http
					.get('http://localhost:8888/rottentomatoes-angular/dist/api/ajax.php')
					//.get('api/ajax.php')
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

		function formatRuntime(runtime){
			var hours = Math.floor( runtime / 60),
				minutes = ( runtime % 60 ),

				hour_label = hours > 1 ? 'hours' : 'hour',
				minute_label = minutes > 1 ? 'minutes' : 'minute';

			return (hours > 0 ? hours + ' ' + hour_label : '') +
				   (minutes > 0 ? ' ' + minutes + ' ' + minute_label : '');
		}

		function stripFlixster(url){
			return url.replace(/resizing.flixster.com\/.*?\/.*?\//i,'',url);
		}

		return {
			getMovies: getMovies,
			getMovie: getMovie,
			formatRuntime: formatRuntime,
			stripFlixster: stripFlixster
		};

	});