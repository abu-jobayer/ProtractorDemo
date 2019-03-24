
exports.config = {


    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    //Capabilities tto run the test
    Capabilities: {
      'browserName': 'chrome'
    },

    //Framework which is using
    framework: 'jasmine2',

    specs: ['specs/addContents.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },

    // Base URL of the website
    baseUrl: 'https://www.officeworks.com.au/',

    allScriptsTimeout: 30000,

    onPrepare: function() {
      //Ignore the error when handling Non Angular content
      browser.ignoreSynchronization=true;

      //Increase the browser window to maximize
      browser.driver.manage().window().maximize();

      //Add babel
      // require("babel-register");

      //Setup Allure Report
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));

      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
    }


  }