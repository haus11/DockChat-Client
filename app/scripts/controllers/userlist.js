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

    $scope.userList = [
      {
        username : 'Peter',
        alias    : 'LuckyMan'
      },
      {
        username : 'Peter',
        alias    : 'Peter Pan'
      },
      {
        username : 'Peter',
        alias    : 'Chuckle Brother'
      },
      {
        username : 'Peter',
        alias    : 'Boom Bob'
      }

    ];


    // #################################################################################################################
    //                                                Socket callbacks
    // #################################################################################################################


    // #################################################################################################################
    //                                                   Functions
    // #################################################################################################################



  });
