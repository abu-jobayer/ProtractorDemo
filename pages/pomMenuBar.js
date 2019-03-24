module.exports = {  
    MenuBar: {
        
        // Xpath for Menu - Technology Tab
        menuTechnologyTab: element(by.xpath("//a[contains(text(),'Technology')]")),  

        // Xpath for Menu - iPhone & Mobile Section
        menuIphoneMobilePhoneSection: element(by.xpath("//a[contains(text(),'iPhones & Mobile Phones')]")),

        // Xpath for Menu - iPhone Section
        menuIphoneSection: element(by.xpath("//a[@href='/shop/officeworks/c/technology/iphones-mobile-phones/iphones'][contains(text(),'iPhones')]")),

        // Xpath for Menu - Cart Icon
        menuCartIcon: element(by.xpath("//div[@data-ref='navLink-cart']")),

        // Xpath for Menu - View Cart & Checkout Button
        menuViewCartCheckoutButton: element(by.xpath("//button[contains(.,'View Cart & Checkout')]")),
    },  


//Methods for Navigation

    //Click Menu - Technology Tab
    click_menuTechnologyTab: function() {   
        this.MenuBar.menuTechnologyTab.isDisplayed();  
        this.MenuBar.menuTechnologyTab.click();  
        browser.sleep(3000); 
    }, 

    //Click Menu - iPhone & Mobile Phone Section
    click_menuIphoneMobilePhoneSection: function() {   
        this.MenuBar.menuIphoneMobilePhoneSection.isDisplayed();  
        this.MenuBar.menuIphoneMobilePhoneSection.click();  
        browser.sleep(3000); 
    }, 

    //Click Menu - iPhone Section
    click_menuIphoneSection: function() {   
        this.MenuBar.menuIphoneSection.isDisplayed();  
        this.MenuBar.menuIphoneSection.click();  
        browser.sleep(3000); 
    }, 

    //Click Menu - Cart Icon
    click_menuCartIcon: function() {   
        this.MenuBar.menuCartIcon.isDisplayed();  
        this.MenuBar.menuCartIcon.click(); 
    }, 

    //Click Menu - View Cart & Check Button
    click_menuViewCartCheckoutButton: function() {   
        this.MenuBar.menuViewCartCheckoutButton.isDisplayed();  
        this.MenuBar.menuViewCartCheckoutButton.click(); 
    }, 


};