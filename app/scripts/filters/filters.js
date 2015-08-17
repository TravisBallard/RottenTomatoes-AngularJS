"use strict";
angular.module('filters',['utils'])

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
	})

	.filter('formatRuntime', function(){
		return function(runtime){

			var hours = Math.floor( runtime / 60),
				minutes = ( runtime % 60 ),

				hour_label = hours > 1 ? 'hours' : 'hour',
				minute_label = minutes > 1 ? 'minutes' : 'minute';

			return (hours > 0 ? hours + ' ' + hour_label : '') +
				   (minutes > 0 ? ' ' + minutes + ' ' + minute_label : '');
		};
	})

	.filter('stripFlixster', function(){
		return function(url){
			var output = '';
			if( typeof url !== 'undefined' ) {
				output = url.replace(/resizing.flixster.com\/.*?\/.*?\//i,'',url);
			}

			return output;
		};
	});