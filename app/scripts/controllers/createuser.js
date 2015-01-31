'use strict';

/**
 * @ngdoc function
 * @name webchatApp.controller:CreateuserCtrl
 * @description
 * # CreateuserCtrl
 * Controller of the webchatApp
 */
angular.module('webchatApp')
  .controller('CreateuserCtrl', function ($scope, $location, connectionService, userService) {

    $scope.newUserInput = {
      username        : '',
      buttonDisabled  : false
    };

    $scope.createUser = function () {
      $scope.newUserInput.buttonDisabled = true;

      var user = {
        username : $scope.newUserInput.username
      };

      connectionService.post(config.api.user, user, function (_data, _jwres) {
        console.log(_data);

        userService.setAlias(_data.username);
        userService.setUserName(_data.username);

        $location.path('/chatRoom');
      });
    };

  });
