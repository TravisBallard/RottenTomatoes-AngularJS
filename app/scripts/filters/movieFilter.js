"use strict";
angular
	.module('filters',['utils'])
	.filter('movieFilter', function(utils){
		return function(input, query){
			if(!query) { return input; }
			var result = [];

			angular.forEach(input, function(movie){
				if(utils.compareStr(movie.title, query)) {
					result.push(movie);
				}
			});
			return result;
		};
	});