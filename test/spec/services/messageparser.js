'use strict';

describe('Service: messageParser', function () {

  // load the service's module
  beforeEach(module('webchatApp'));

  // instantiate service
  var messageParser;
  beforeEach(inject(function (_messageParser_) {
    messageParser = _messageParser_;
  }));

  it('should do something', function () {
    expect(!!messageParser).toBe(true);
  });

});
