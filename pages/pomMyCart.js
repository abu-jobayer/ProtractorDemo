module.exports = {  
    CartPage: {
        
        //Xpath of My Cart - 1st Order Content
        OrderContent1: element(by.xpath("//div[@class='ow-cart__section'][1]")),

        //Xpath of My Cart - 2nd Order Content
        OrderContent2: element(by.xpath("//div[@class='ow-cart__section'][2]")),

        //Xpath of My Cart - Remove Button 1
        removeButton1: element(by.xpath("//div[@id='itemDetails']//div[3]//div[2]//div[1]//div[5]//button[1]//span[1]")),

        //Xpath of My Cart - Remove Button 1
        removeButton2: element(by.xpath("//div[contains(@class,'ow-cart__column ow-cart__column--sub-total')]//span[contains(text(),'Remove')]"))
    },  


//Methods for Validation

    //Validate the 1st Order
    validate_OrderContent1: function(){
        expect(this.CartPage.OrderContent1.isDisplayed()).toBe(true);
        browser.sleep(3000); 
    },

    //Validate the 2nd Order
    validate_OrderContent2: function(){
        expect(this.CartPage.OrderContent2.isDisplayed()).toBe(true);
        browser.sleep(3000); 
    },

   //Click Cart Page - Remove Button 1
   click_removeButton1: function() {   
        this.CartPage.removeButton1.isDisplayed();  
        this.CartPage.removeButton1.click();  
        browser.sleep(3000); 
    }, 

   //Click Cart Page - Remove Button 2
   click_removeButton2: function() {   
        this.CartPage.removeButton2.isDisplayed();  
        this.CartPage.removeButton2.click();  
        browser.sleep(3000); 
    }, 

};