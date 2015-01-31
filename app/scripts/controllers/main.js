'use strict';

/**
 * @ngdoc function
 * @name webchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webchatApp
 */
angular.module('webchatApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, userService, connectionService) {

    connectionService.post(config.api.authenticate, function (_data, _jwres) {
      console.log(_data);
      if (Object.keys(_data).length === 0) {
        // ask for name
        // create user on /user POST
        $location.path('/createUser');
      }
      else {
        // get data from session
      }

      userService.setAlias('PartyMan');
      userService.setUserName('PartyMan');

      // TODO: Can be buggy if it is loaded to quickly before the other controllers are done with loading (No broadcast
      // will be received in listener controllers
      $rootScope.$broadcast(config.bc.onStartFinished);
    });

  });
