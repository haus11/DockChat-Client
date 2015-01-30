'use strict';

/**
 * @ngdoc function
 * @name webchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webchatApp
 */
angular.module('webchatApp')
  .controller('MainCtrl', function ($scope, $rootScope, userService, connectionService) {

    userService.setAlias('PartyMan');
    userService.setUserName('PartyMan');

    $rootScope.$broadcast(config.bc.onStartFinished);

  });
