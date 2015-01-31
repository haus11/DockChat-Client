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
      console.log(_data);
      $scope.userList = $scope.userList.concat(_data);
    });

    connectionService.on(config.api.user_create, function (_data) {
      console.log('UserCreate');
      console.log(_data);
      $scope.userList.push(_data);
    });

    connectionService.on(config.api.user_reconnect, function (_data) {
      console.log('UserReconnect');
      console.log(_data);
      $scope.userList.push(_data);
    });

    connectionService.on(config.api.user_disconnect, function (_data) {
      console.log('UserDisconnect');
      console.log(_data);
      for (var i = 0; i < $scope.userList.length; i++) {
        if ($scope.userList[i].id == _data.id) {
          $scope.userList.splice(i, 1);
          break;
        }
      }
    });

    // #################################################################################################################
    //                                                   Functions
    // #################################################################################################################



  });
