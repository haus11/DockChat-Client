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
      console.log('getUser');
      $scope.userList = $scope.userList.concat(_data);
    });

    connectionService.on(config.api.user_create, function (_data) {
      console.log('UserCreate');
      $scope.userList.push(_data);
    });

    connectionService.on(config.api.user_reconnect, function (_data) {
      console.log('UserReconnect');
      $scope.userList.push(_data);
    });

    connectionService.on(config.api.user_disconnect, function (_data) {
      console.log('UserDisconnect');
      $scope.userList.splice($scope.userList.indexOf(_data), 1);
    });

    // #################################################################################################################
    //                                                   Functions
    // #################################################################################################################



  });
