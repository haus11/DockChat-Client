'use strict';

/**
 * @ngdoc function
 * @name webchatApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the webchatApp
 */
angular.module('webchatApp')
  .controller('ChatCtrl', function ($scope, $rootScope, userService, connectionService) {

    // #################################################################################################################
    //                                                      Base
    // #################################################################################################################

    $scope.chatInput = {
      message: ''
    };

    $scope.chatMessages = [
      //{
      //  id        : 0,
      //  user      : {
      //    id       : 0,
      //    username : 'Peter'
      //  },
      //  text      : 'How is it going man? www.google.de :dog:',
      //  from      : 'LuckyLuke',
      //  to        : null,
      //  createdAt : '13:23'
      //}
    ];

    // #################################################################################################################
    //                                                Socket callbacks
    // #################################################################################################################

    // get last messages
    connectionService.get(config.api.messageGet, null, function (_data, _jwres) {
      // Get last messaged and add them
      console.log(_data);
      $scope.chatMessages = $scope.chatMessages.concat(_data.reverse());
    });

    // register callback when a new message arrives
    connectionService.on(config.api.messageCreate, function (_message) {
      console.log(_message);

      // New message appears
      $scope.chatMessages.push(_message);

    });

    // #################################################################################################################
    //                                                   Functions
    // #################################################################################################################

    $scope.sendMessage = function () {
      var message = {
        text : $scope.chatInput.message
      };

      connectionService.post(config.api.messageSend, message, function (_data, _jwres) {

      });

      $scope.chatInput.message = '';
    };

  });
