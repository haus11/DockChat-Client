'use strict';

/**
 * @ngdoc filter
 * @name webchatApp.filter:usernameFilter
 * @function
 * @description
 * # usernameFilter
 * Filter in the webchatApp.
 */
angular.module('webchatApp')
  .filter('usernameFilter', function () {
    return function (input) {
      return input == null ? 'Anonymous' : input;
    };
  });
