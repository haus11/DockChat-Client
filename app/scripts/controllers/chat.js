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
      $scope.chatMessages = $scope.chatMessages.concat(_data);
    });

    // register callback when a new message arrives
    connectionService.on(config.api.messageCreate, function (_message) {
      console.log(_message);

      // New message appears
      $scope.chatMessages.push(
        {
          id        : _message.id,
          user      : {
            id       : 0,
            username : userService.getUserName()
          },
          text      : _message.text,
          from      : userService.getAlias(),
          to        : null,
          createdAt : _message.createdAt
        });

      console.log($scope.chatMessages);
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
