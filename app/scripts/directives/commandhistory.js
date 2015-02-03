'use strict';

/**
 * @ngdoc directive
 * @name webchatApp.directive:commandHistory
 * @description
 * # commandHistory
 */
angular.module('webchatApp')
  .directive('commandHistory', ['commandHistoryService', function (commandHistoryService) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function ($scope, $element, $attrs, ngModel) {

        $element.bind('keydown', function (event) {

          var currentValue = $element.val();
          var command = '';

          // Enter
          if (event.which === 13) {
            if (currentValue != undefined && currentValue != '') {
              commandHistoryService.addCommand(currentValue);
            }
          }
          // Up Arrow
          else if (event.which === 38) {
            command = commandHistoryService.getNextCommand();
            $element.val(command);
            ngModel.$setViewValue(command);
          }
          // Down Arrow
          else if (event.which === 40) {
            command = commandHistoryService.getLastCommand();
            $element.val(command);
            ngModel.$setViewValue(command);
          }

          if ($scope.$root.$$phase !== '$apply' && $scope.$root.$$phase !== '$digest') {
            $scope.$apply();
          }
        });
      }
    };
  }]);
