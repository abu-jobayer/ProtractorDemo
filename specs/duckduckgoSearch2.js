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

  it('And The Total Direct Queries should be equal to the sum of all the total directs from each month', function () {
      //Get the Value of the Direct Queries
      
      var decDQ = element(by.xpath(datasource.decDQ)).getAttribute('value'),
      novDQ = element(by.xpath(datasource.novDQ)).getAttribute('value'),
      octDQ = element(by.xpath(datasource.octDQ)).getAttribute('value'),
      sepDQ = element(by.xpath(datasource.sepDQ)).getAttribute('value'),
      augDQ = element(by.xpath(datasource.augDQ)).getAttribute('value'),
      julDQ = element(by.xpath(datasource.julDQ)).getAttribute('value'),
      junDQ = element(by.xpath(datasource.junDQ)).getAttribute('value'),
      mayDQ = element(by.xpath(datasource.mayDQ)).getAttribute('value'),
      aprDQ = element(by.xpath(datasource.aprDQ)).getAttribute('value'),
      marDQ = element(by.xpath(datasource.marDQ)).getAttribute('value'),
      febDQ = element(by.xpath(datasource.febDQ)).getAttribute('value'),
      janDQ = element(by.xpath(datasource.janDQ)).getAttribute('value'),
      mainDQ = element(by.xpath(datasource.mainDQ)).getAttribute('value');

      protractor.promise.all([decDQ, novDQ, octDQ, sepDQ, augDQ, julDQ, junDQ, mayDQ, aprDQ, marDQ, febDQ, janDQ, mainDQ]).then(function (values) {
        expect(parseInt(values[0]) + parseInt(values[1]) + parseInt(values[2]) + parseInt(values[3]) + parseInt(values[4]) + parseInt(values[5]) + parseInt(values[6]) + parseInt(values[7]) + parseInt(values[8]) + parseInt(values[9]) + parseInt(values[10]) + parseInt(values[11])).toEqual(parseInt(values[12]));
    });


  });


});