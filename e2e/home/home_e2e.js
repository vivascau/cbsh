'use strict';

describe('home page', function() {
  var homePage = require('./homePage');

  homePage.open();

  it('should show and open the menu', function() {
    homePage.menuButton().click();
    expect(homePage.menuSideNav().isDisplayed()).toBeTruthy();
  });

});