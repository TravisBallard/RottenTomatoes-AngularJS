'use strict';

describe('Controller: MovieCtrl', function () {

  // load the controller's module
  beforeEach(module('rottentomatoes2App'));

  var MovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieCtrl = $controller('MovieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieCtrl.awesomeThings.length).toBe(3);
  });
});
