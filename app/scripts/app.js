'use strict';

/**
 * @ngdoc overview
 * @name rottentomatoes2App
 * @description
 * # rottentomatoes2App
 *
 * Main module of the application.
 */
angular
  .module('rottentomatoes2App', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'filters'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'movieListController',
        controllerAs: 'main'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'movieDetailController',
        controllerAs: 'movie'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
