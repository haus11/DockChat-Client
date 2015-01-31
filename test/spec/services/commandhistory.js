'use strict';

describe('Service: commandHistory', function () {

  // load the service's module
  beforeEach(module('webchatApp'));

  // instantiate service
  var commandHistory;
  beforeEach(inject(function (_commandHistory_) {
    commandHistory = _commandHistory_;
  }));

  it('should do something', function () {
    expect(!!commandHistory).toBe(true);
  });

});
