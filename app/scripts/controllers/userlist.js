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

    $scope.chatInput = {
      message: ''
    };

    $scope.userList = [];


    // #################################################################################################################
    //                                                Socket callbacks
    // #################################################################################################################


    // #################################################################################################################
    //                                                   Functions
    // #################################################################################################################

    $scope.sendMessage = function () {
      var message = {
        text : $scope.chatInput.message
      };

      connectionService.post(config.api.messageSend, message, function (_data, _jwres) {
        console.log(_data);
      });

      $scope.chatInput.message = '';
    };

  });
