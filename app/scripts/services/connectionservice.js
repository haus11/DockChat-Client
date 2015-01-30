/* global io */
'use strict';

/**
 * @ngdoc service
 * @name assetsApp.connectionService
 * @description
 * # connectionService
 * Service in the assetsApp.
 */
io.sails.autoConnect = false;

angular.module('webchatApp')
  .service('connectionService', function ($rootScope) {
    // -----------------------------------------------------------------------------
    // Create the connection to the game server. The "io" variable is the global
    // sails.io object. As an angular service will be instantiated only once, we can
    // connect to the server here.
    // -----------------------------------------------------------------------------
    io.sails.autoConnect = false;
    io.sails.url = 'http://haus11.org:1337';

    var socket = io.sails.connect();


    // -----------------------------------------------------------------------------
    // Setup connect and error events
    // TODO: Use notification service or something to notify user whats going on
    // -----------------------------------------------------------------------------
    socket.on('connect', function() {
      console.log('Successfully connected.');
    });

    socket.on('reconnect', function() {
      console.log('Successfully reconnected.');
    });

    socket.on('connect_error', function() {
      console.log('Connection error.');
    });

    socket.on('reconnect_failed', function() {
      console.log('Could not reconnect within specified reconnection attempts.')
    });



    // -----------------------------------------------------------------------------
    // Public api of the connection service
    // -----------------------------------------------------------------------------
    return {
      get: function(url, payload, callback) {
        socket.get(url, payload, function() {
          var args = arguments;
          $rootScope.$apply(function() {
            callback.apply(socket, args);
          });
        });
      },

      post: function(url, payload, callback) {
        socket.post(url, payload, function() {
          var args = arguments;
          $rootScope.$apply(function() {
            callback.apply(socket, args);
          });
        });
      },

      on: function (eventName, callback) {
        socket.on(eventName, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },

      removeAllListeners: function() {
        socket.removeAllListeners();
      }
    };
  });
