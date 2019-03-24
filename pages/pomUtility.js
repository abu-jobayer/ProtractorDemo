module.exports = {  
    Utility: {
        
        //Xpath for Officeworks Logo on Top
        officeworksLogo: element(by.xpath("//a[@class='navbar-brand ow-logo']")),  

    },  


//Methods for Navigation

    // Open the Base URL
    openBaseURL: function() {  
        browser.get('');  
    },  

    //Click on the Top Officework Logo
    click_officeworksLogo: function() {   
        this.Utility.officeworksLogo.isDisplayed();  
        this.Utility.officeworksLogo.click();  
        browser.sleep(3000); 
    }, 

};