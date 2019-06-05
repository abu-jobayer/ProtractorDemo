/**
 * Created by Selenium on 04-12-2015.
 */
var Objects = require('../Data/Objects.json');
var using = require('jasmine-data-provider');


describe("Test Gmail",function(){

   beforeEach(function(){

    //    browser.ignoreSynchronization = true;
       browser.get(Objects.testsiteurl);
       console.log("Test site URL is : "+Objects.testsiteurl);

   }) ;

    function plusProvider(){

        return [

            {username:Objects.userdetails.username1},
            {username:Objects.userdetails.username2},
        ];


    }



    using(plusProvider,function(data){

        it("Validate user credentials",function(){

            element(by.xpath(Objects.locators.loginpage.username)).sendKeys(data.username);
            browser.sleep(5000);


        });


    });


});
