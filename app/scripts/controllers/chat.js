'use strict';

/**
 * @ngdoc function
 * @name webchatApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the webchatApp
 */
angular.module('webchatApp')
  .controller('ChatCtrl', function ($scope, userService, connectionService) {

    // #################################################################################################################
    //                                                      Base
    // #################################################################################################################

    $scope.chatMessages = [
      {
        id        : 0,
        user      : {
          id       : 0,
          username : 'Peter'
        },
        text      : 'Lutsch mir meinen Schwanz!',
        from      : 'LuckyLuke',
        to        : null,
        createdAt : '13:23'
      }
    ];

    // #################################################################################################################
    //                                                Socket callbacks
    // #################################################################################################################

    connectionService.get(config.api.messageGet, null, function (_data, _jwres) {
      console.log(_data);
    });

    connectionService.on(config.api.messageCreate, function (_message) {
      console.log(_message);

      // New message appears
      $scope.chatMessages.push(
        {
          id        : 0,
          user      : {
            id       : 0,
            username : 'Peter'
          },
          text      : _message.data.text,
          from      : 'LuckyLuke',
          to        : null,
          createdAt : '13:23'
        })
    });

    // #################################################################################################################
    //                                                   Functions
    // #################################################################################################################



  });
