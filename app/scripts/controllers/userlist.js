'use strict';

/**
 * @ngdoc function
 * @name webchatApp.controller:UserlistCtrl
 * @description
 * # UserlistCtrl
 * Controller of the webchatApp
 */
angular.module('webchatApp')
  .controller('UserlistCtrl', function ($scope, userService, connectionService) {

    // #################################################################################################################
    //                                                      Base
    // #################################################################################################################

    $scope.userList = [];

    // #################################################################################################################
    //                                                Socket callbacks
    // #################################################################################################################

    connectionService.get(config.api.user, function (_data, _jwres) {
      console.log(_data);
      $scope.userList = $scope.userList.concat(_data);
    });

    connectionService.on(config.api.user_connect, function (_data) {
      console.log(_data);
      $scope.userList.push(_data);
    });

    connectionService.on(config.api.user_disconnect, function (_data) {
      console.log(_data);

    });

    // #################################################################################################################
    //                                                   Functions
    // #################################################################################################################



  });
