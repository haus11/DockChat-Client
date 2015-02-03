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
  .service('commandHistoryService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var commandHistory = [];
    var commandCounter = 0;

    return {
      addCommand : function (_command) {
        commandHistory.unshift(_command);
        commandCounter = -1;

        console.log(commandHistory);
      },

      getNextCommand : function () {
        var command = commandHistory[commandHistory.length - 1];

        if (commandCounter < commandHistory.length - 1) {

          commandCounter++;
          command = commandHistory[commandCounter];
          console.log(command + ' | ' + commandCounter);
        }

        return command;
      },

      getLastCommand : function () {
        var command = '';

        if (commandCounter > 0) {

          commandCounter--;
          command = commandHistory[commandCounter];
          console.log(command + ' | ' + commandCounter);
        }
        else {
          commandCounter = -1;
        }

        return command;
      },

      getCurrentCommand : function () {
        var command = '';

        if (commandHistory.length > 0) {
          command = commandHistory[commandCounter];
        }
        return command;
      },

      resetCommandCounter : function () {
        commandCounter = -1;
      },

      resetData : function () {
        commandCounter = -1;
        commandHistory = [];
      }
    };
  });
