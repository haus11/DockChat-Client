'use strict';

describe('Controller: ChatroomCtrl', function () {

  // load the controller's module
  beforeEach(module('webchatApp'));

  var ChatroomCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatroomCtrl = $controller('ChatroomCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
