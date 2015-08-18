"use strict";
angular.module('rottentomatoes2App')
	.directive('resize', function ($window) {
		return function (scope, element, attr) {

			var $ = $window.$,
				movie = $('.movie:first-child'),
				w = angular.element($window);

			scope.$watch(function () {
				return {
					'w': movie.width()
				};
			}, function (newValue) {

				scope.movieWidth = newValue.w;

				scope.resizeMovie = function() {

					scope.$eval(attr.notifier);

					var originalWidth = 54,
						originalHeight = 80,

						adjustedHeight = scope.movieWidth * originalHeight / originalWidth;

					return {
						'height': adjustedHeight + 'px'
					};

				};

			}, true);

			w.bind('resize', function () {
				scope.$apply();
			});
		};
	});