var datasource = require('../Data/data.json');
// var using = require('jasmine-data-provider');

module.exports = {
    DuckduckgoTrafic: {
        //Xpath for 2018 Trafic Label
        trafic2018Label: element(by.xpath("//h2[contains(text(),'2018 Traffic')]")),

    },


    //Methods for Navigation

    //Open the Duckduckgo Home page
    openDuckduckgoTraficUrl: function () {
        browser.get(datasource.ducduckgoTraficURL);
    },

    // Click 2019 Trafic Label
    clickTrafic2018Label: function () {
        this.DuckduckgoTrafic.trafic2018Label.isDisplayed();
        this.DuckduckgoTrafic.trafic2018Label.click();
    },


    // Methods for validations


    //Validate All 12 Months are showing for 2018
    validate12MonthsPosition: function () {
        browser.sleep(3000);
        expect(element(by.xpath(datasource.janPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.febPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.marPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.aprPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.mayPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.junPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.julPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.augPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.sepPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.octPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.novPS)).isPresent()).toBe(true);
        expect(element(by.xpath(datasource.decPS)).isPresent()).toBe(true);

    },



};