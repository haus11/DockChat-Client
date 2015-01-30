'use strict';

describe('Filter: usernameFilter', function () {

  // load the filter's module
  beforeEach(module('webchatApp'));

  // initialize a new instance of the filter before each test
  var usernameFilter;
  beforeEach(inject(function ($filter) {
    usernameFilter = $filter('usernameFilter');
  }));

  it('should return the input prefixed with "usernameFilter filter:"', function () {
    var text = 'angularjs';
    expect(usernameFilter(text)).toBe('usernameFilter filter: ' + text);
  });

});
