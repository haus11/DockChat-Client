'use strict';

/**
 * @ngdoc function
 * @name webchatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webchatApp
 */
angular.module('webchatApp')
  .controller('MainCtrl', function ($scope, userService, connectionService) {

    connectionService.get(config.api.messageGet, null, function (_data, _jwres) {
      console.log(_data);
    });

    connectionService.on(config.api.messageCreate, function (_message) {
      console.log(_message);
    });


    $scope.chatInput = {
      message: ''
    };

    $scope.userList = [];

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

    $scope.sendMessage = function () {
      $scope.chatMessages.push(
        {
          id        : 0,
          user      : {
            id       : 0,
            username : userService.getUserName()
          },
          text      : $scope.chatInput.message,
          from      : userService.getAlias(),
          to        : null,
          createdAt : '13:23'
        });
      $scope.chatInput.message = '';
    };

  });
