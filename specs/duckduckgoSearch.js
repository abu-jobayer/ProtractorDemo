var DuckduckgoHomepage = require('../pages/pomDuckDuckGoHome.js');
// var datasource = require('../Data/data.json');
// var using = require('jasmine-data-provider');



describe('AC: 1', function () {

  it('Given I am on the homepage', function () {
    DuckduckgoHomepage.openDuckduckgoUrl();
  });

  it('When I look at the page', function () {
    DuckduckgoHomepage.duckduckgoLogoIsDisplay();
  });

  it('Then I expect to see the duckduckgo logo on the page', function () {
    DuckduckgoHomepage.validateDuckduckgoLogo();
  });

});

describe('AC: 2', function () {

  it('Given I am on the homepage', function () {
    DuckduckgoHomepage.openDuckduckgoUrl();
  });

  it('When I type "super" into the search box', function () {
    DuckduckgoHomepage.insertSearchInput1();
  });

  it('Then I expect to see exactly 10 suggestions in the typeahead dropdown', function () {
    DuckduckgoHomepage.validateSuggesion();
  });

});

describe('AC: 3', function () {

  it('Given I am on the homepage', function () {
    DuckduckgoHomepage.openDuckduckgoUrl();
  });

  it('When I type "supercalafragalistic" into the search box', function () {
    DuckduckgoHomepage.insertSearchInput2();
    DuckduckgoHomepage.clickSearchButton();
  });

  it('Then I expect the first result to be "supercalafragalisticexpialadoshus"', function () {
    DuckduckgoHomepage.validate1stSearchResultRow();
  });

});


describe('AC: 4', function () {

  it('Given I am on the homepage', function () {
    DuckduckgoHomepage.openDuckduckgoUrl();
  });

  it('When I click on the hamburger menu in the top right', function () {
    DuckduckgoHomepage.clickHumbergerMenu();
  });

  it('Then I expect to see a themes link', function () {
    DuckduckgoHomepage.validateHumbergerMenu();
  });

});

describe('AC: 5', function () {

  it('Given I am on the homepage', function () {
    DuckduckgoHomepage.openDuckduckgoUrl();
  });

  it('When When I click on the themes link', function () {
    DuckduckgoHomepage.clickHumbergerMenu();
    DuckduckgoHomepage.clickThemeLink();
  });

  it('then click on the dark mode theme button', function () {
    DuckduckgoHomepage.clickDarkTheme();
  });

  it('Then My page background should change colour', function () {
    DuckduckgoHomepage.validateCheckedDarkTheme();
  });

});


// describe('AC: 6', function () {

//   it('Given I am on the homepage', function () {
//     DuckduckgoHomepage.openDuckduckgoUrl();
//   });

//   // it('Validate Search output', function () {
//   //   DuckduckgoHomepage.validateSearchResult();
//   // });
  

// //   function plusProvider(){
// //     return [
// //       {movieName: datasource.moviesdetails.movies1},
// //       {movieName: datasource.moviesdetails.movies2},
// //       {movieName: datasource.moviesdetails.movies3},
// //       {movieName: datasource.moviesdetails.movies4},
// //       {movieName: datasource.moviesdetails.movies5},
// //       {movieName: datasource.moviesdetails.movies6},
// //     ];
// // }

// // using(plusProvider,function(data){

// //     it("Validate Search Result",function(){
// //       element(by.xpath(datasource.locators.searchInputBox)).sendKeys(data.movieName);
// //         // DuckduckgoHomepage.DuckduckgoHomepage.searchInputBox.sendKeys(data.movieName);
// //     });
// // });

// });
