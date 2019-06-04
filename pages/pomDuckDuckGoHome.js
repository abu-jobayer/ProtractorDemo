var datasource = require('../Data/data.json');
// var using = require('jasmine-data-provider');

module.exports = {
    DuckduckgoHomepage: {
        //Xpath for Duckduckgo Logo
        duckduckgoLogo: element(by.xpath("//a[@class='logo_homepage']")),

        //Xpath for Search input
        searchInputBox: element(by.xpath("//input[@id='search_form_input_homepage']")),

        //Xpath for Search dropdown result 10th
        dropdownResult10: element(by.xpath("//div[@data-index='9']")),

        //Xpath for Search dropdown result 11th
        dropdownResult11: element(by.xpath("//div[@data-index='10']")),

        //Xpath for Search dropdown result 11th
        searchDropdownList: element(by.xpath("//div[contains(@class,'acp-wrap js-acp-wrap')]")),

        //Xpath for Search Button
        searchButton: element(by.xpath("//input[@id='search_button_homepage']")),

        //Xpath for 1st Search result Row
        SearchResultRow1: element(by.xpath("//div[@id='r1-0']/div/div/div/a[@href='https://en.wikipedia.org/wiki/Supercalifragilisticexpialidocious']")),

        //Xpath for Humberger Menu
        humbergerMenu: element(by.xpath("//a[contains(@class,'js-side-menu-open')]")),

        //Xpath for Theme link
        themeLink: element(by.xpath("//a[contains(text(),'Themes')]")),

        //Xpath for Dark Theme link
        darkTheme: element(by.xpath("//label[contains(text(),'Dark')]")),

        //Xpath for Check Dark Theme
        checkedDarkTheme: element(by.xpath('//label[@class="set-theme is-checked"][@data-theme-id="d"]')),


    },


    //Methods for Navigation

    //Open the Duckduckgo Home page
    openDuckduckgoUrl: function () {
        browser.get(datasource.ducduckgoHomeURL);
    },

    // Duckduckgo Logo is showing
    duckduckgoLogoIsDisplay: function () {
        this.DuckduckgoHomepage.duckduckgoLogo.isDisplayed();
        browser.sleep(3000);
    },

    // Input search input 1
    insertSearchInput1: function () {
        this.DuckduckgoHomepage.searchInputBox.isDisplayed();
        this.DuckduckgoHomepage.searchInputBox.sendKeys(datasource.searchInput1);
        browser.sleep(3000);
    },

    //Click the Search Button
    clickSearchButton: function () {
        this.DuckduckgoHomepage.searchButton.isDisplayed();
        this.DuckduckgoHomepage.searchButton.click();
    },

    // Input search input 2
    insertSearchInput2: function () {
        this.DuckduckgoHomepage.searchInputBox.sendKeys(datasource.searchInput2);
    },

    //Click the Humberger Menu
    clickHumbergerMenu: function () {
        this.DuckduckgoHomepage.humbergerMenu.isDisplayed();
        this.DuckduckgoHomepage.humbergerMenu.click();
    },

    //Click the Theme Link
    clickThemeLink: function () {
        browser.sleep(3000);
        this.DuckduckgoHomepage.themeLink.isDisplayed();
        this.DuckduckgoHomepage.themeLink.click();
    },

    //Click the Dark Theme Link
    clickDarkTheme: function () {
        this.DuckduckgoHomepage.darkTheme.isDisplayed();
        this.DuckduckgoHomepage.darkTheme.click();
    },

    // // Return Data from the source 
    // plusProvider: function () {

    //     return [

    //         {movieName: datasource.moviesdetails.movies1},
    //         {movieName: datasource.moviesdetails.movies2},
    //         {movieName: datasource.moviesdetails.movies3},
    //         {movieName: datasource.moviesdetails.movies4},
    //         {movieName: datasource.moviesdetails.movies5},
    //         {movieName: datasource.moviesdetails.movies6},
    //     ];
    // },

    // validateSearchResult: using(plusProvider,function(data){

    //         this.DuckduckgoHomepage.searchInputBox.isDisplayed();
    //         this.DuckduckgoHomepage.searchInputBox.sendKeys(data.movieName);
    //         this.DuckduckgoHomepage.searchButton.click();
    //         browser.sleep(3000);

    // //    });

    // }),



    // Methods for validations


    //Validate dropdown suggestion contain 10 results
    validateSuggesion: function () {
        browser.sleep(5000);
        expect(this.DuckduckgoHomepage.dropdownResult10.isDisplayed()).toBe(true);
        expect(this.DuckduckgoHomepage.searchDropdownList).not.toContain(this.DuckduckgoHomepage.dropdownResult11);
    },

    //Validate 1st Search Result Row
    validate1stSearchResultRow: function () {
        browser.sleep(5000);
        this.DuckduckgoHomepage.SearchResultRow1.isDisplayed();
        expect(this.DuckduckgoHomepage.SearchResultRow1.isDisplayed()).toBe(true);
    },

    //Validate the Humberger Menu is Displayed
    validateHumbergerMenu: function () {
        expect(this.DuckduckgoHomepage.humbergerMenu.isDisplayed()).toBe(true);
    },

    //Validate the Duckduckgo Logo is Displayed
    validateDuckduckgoLogo: function () {
        expect(this.DuckduckgoHomepage.duckduckgoLogo.isDisplayed()).toBe(true);
    },

    //Validate the checked Dark Theme is Displayed
    validateCheckedDarkTheme: function () {
        browser.sleep(5000);
        expect(this.DuckduckgoHomepage.checkedDarkTheme.isDisplayed()).toBe(true);
    },

};