var datasource = require('../Data/data.json');
var using = require('jasmine-data-provider');
var DuckduckgoHomepage = require('../pages/pomDuckDuckGoHome.js');
var DuckduckgoTrafic = require('../pages/pomDuckDuckGoTrafic.js');


describe('AC: 6', function () {

  beforeEach(function () {

  });

  it('Given I am on the homepage', function () {
    DuckduckgoHomepage.openDuckduckgoUrl();
  });


  function plusProvider() {
    return [
      { movieName: datasource.movie1 },
      { movieName: datasource.movie2 },
      { movieName: datasource.movie3 },
      { movieName: datasource.movie4 },
      { movieName: datasource.movie5 },
      { movieName: datasource.movie6 },
    ];
  }

  using(plusProvider, function (data) {

    it("Validate All Search Result should get 10 results on the results page", function () {
      element(by.xpath(datasource.searchBox)).sendKeys(data.movieName);
      element(by.xpath(datasource.searchButton)).click();
      browser.sleep(3000);
      expect(element(by.xpath(datasource.result10)).isPresent()).toBe(true);
      browser.sleep(3000);
      browser.get(datasource.ducduckgoHomeURL);
    });
  });

});


describe('AC: 7', function () {

  it('Given I am on the traffic page', function () {
    browser.get(datasource.ducduckgoTraficURL);
  });

  it('When I click on the 2018 Traffic section', function () {
    DuckduckgoTrafic.clickTrafic2018Label();
  });

  it('Then I should see all the months listed in the order from Dec to Jan', function () {
    DuckduckgoTrafic.validate12MonthsPosition();
  });



});