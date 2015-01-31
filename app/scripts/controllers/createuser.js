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
      username : ''
    };

    $scope.createUser = function () {
      var user = {
        username : $scope.newUserInput.username
      };

      connectionService.post(config.api.user_create, user, function (_data, _jwres) {
        console.log(_data);

        // $location.path('/chatRoom');
      });
    };

  });