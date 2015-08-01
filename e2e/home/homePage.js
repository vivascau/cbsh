'use strict';

function HomePage() {

  function open() {
    browser.get('http://localhost:8000/');
  }

  function menuButton(){
    return  element(by.css('.menuBtn'));
  }

  function menuSideNav(){
    return  element(by.css('.md-sidenav-left'));
  }

  return {
    menuButton: menuButton,
    menuSideNav: menuSideNav,
    open: open
  };
}

module.exports = new HomePage();