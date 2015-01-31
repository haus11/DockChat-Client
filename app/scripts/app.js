'use strict';

/**
 * @ngdoc overview
 * @name webchatApp
 * @description
 * # webchatApp
 *
 * Main module of the application.
 */
angular
  .module('webchatApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.filter',
    'luegg.directives',
    'emoji'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/createUser', {
        templateUrl: 'views/createuser.html',
        controller: 'CreateuserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
