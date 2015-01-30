'use strict';

/**
 * @ngdoc service
 * @name webchatApp.userService
 * @description
 * # userService
 * Service in the webchatApp.
 */
angular.module('webchatApp')
  .service('userService', function () {

    var userName = 'Anonymous';
    var alias    = 'Anonymous';

    return {
      getUserName : function () {
        return userName;
      },

      setUserName : function (_userName) {
        userName = _userName;
      },

      getAlias : function () {
        return alias;
      },

      setAlias : function (_alias) {
        alias = _alias;
      }
    };
  });
