module.exports = {  
    ProductList: { 

        //Xpath for First Add To Cart Button 
        addToCart1: element(by.xpath("//div[@data-ref='results-wrapper-browse']//div[1]//div[1]//div[2]//div[2]//div[1]//div[1]//span[1]//button[1]//span[1]//span[1]")),
        
        //Xpath for Second Add To Cart Button 
        addToCart2: element(by.xpath("//div[@data-ref='results-wrapper-browse']//div[2]//div[2]//div[2]//div[2]//div[1]//div[1]//span[1]//button[1]//span[1]//span[1]"))
    },  


//Methods for Navigation

    //Add to Product List - 1st Item
    click_productList_addToCart1: function() {   
        this.ProductList.addToCart1.isDisplayed();  
        this.ProductList.addToCart1.click();  
        browser.sleep(3000); 
    }, 

    //Add to Product List - 2nd Item
    click_productList_addToCart2: function() {   
        this.ProductList.addToCart2.isDisplayed();  
        this.ProductList.addToCart2.click();  
        browser.sleep(3000); 
    }, 

};