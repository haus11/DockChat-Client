'use strict';

describe('Directive: commandHistory', function () {

  // load the directive's module
  beforeEach(module('webchatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<command-history></command-history>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the commandHistory directive');
  }));
});
