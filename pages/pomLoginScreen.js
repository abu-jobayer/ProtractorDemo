var data = require('../Data/data.json');

module.exports = { 
    LoginScreen: {
        //Xpath for Email Input field  
        emailInputBox: element(by.xpath("//input[@placeholder='Login ID or Email Address']")),

        //Xpath for password Input field  
        passwordInputBox: element(by.xpath("//input[@placeholder='Password']")),  

        //Xpath for Login Button 
        loginButton: element(by.xpath("//span[contains(text(),'Log in')]")),

        //Xpath for Logout Button 
        logoutButton: element(by.xpath("//a[contains(text(),'Log out')]"))
    },  

    

//Methods for Navigation

    // Input Email address
    inputEmailAddress: function() {
        this.LoginScreen.emailInputBox.isDisplayed();  
        this.LoginScreen.emailInputBox.sendKeys(data.emailAddress);  
        browser.sleep(3000);
    },
    
    // Input Password
    inputPassword: function() {
        this.LoginScreen.passwordInputBox.isDisplayed();  
        this.LoginScreen.passwordInputBox.sendKeys(data.password);  
        browser.sleep(3000);
    },

    //Click the Login Button
    clickLoginButton: function() {   
        this.LoginScreen.loginButton.isDisplayed();  
        this.LoginScreen.loginButton.click();  
        browser.sleep(3000); 
    },  

    //Click the Login Button
    clickLogoutButton: function() {   
        this.LoginScreen.logoutButton.isDisplayed();  
        this.LoginScreen.logoutButton.click();  
        browser.sleep(3000); 
    }, 


//Methods for Validation

    //Validate the Logout Button is Displayed
    validateLogoutButton: function(){
        expect(this.LoginScreen.logoutButton.isDisplayed()).toBe(true);
        browser.sleep(3000); 
    },

    //Validate the Login Button is Displayed
    validateLoginButton: function(){
        expect(this.LoginScreen.loginButton.isDisplayed()).toBe(true);
        browser.sleep(3000); 
    }


};