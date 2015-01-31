'use strict';

/**
 * @ngdoc This service contains all commands and messages, which the user has used, os he can retrieve them
 *        by using his down and arrow keys
 * @name webchatApp.commandHistory
 * @description
 * # commandHistory
 * Service in the webchatApp.
 */
angular.module('webchatApp')
  .service('commandHistory', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var commandHistory = [];
    var commandCounter = 0;

    return {
      addCommand : function (_command) {
        commandHistory.push(_command);
      },

      getNextCommand : function () {
        var command = commandHistory[commandCounter];
        commandCounter++;
        return command;
      },

      getLastCommand : function () {
        var command = commandHistory[commandCounter];
        commandCounter++;
        return command;
      },

      getCurrentCommand : function () {
        return commandHistory[commandCounter];
      },

      resetCommandCounter : function () {
        commandCounter = 0;
      }
    };
  });
