var LoginPage = require('../pages/pomLoginScreen.js');
var UtilityPage = require('../pages/pomUtility');
var Menu = require('../pages/pomMenuBar');
var ProductList = require('../pages/pomProductList');
var CartPage = require('../pages/pomMyCart');


  
describe('Test 01: Login to the Officeworks website with right Crdential', function() {  
  
  it('Open the Officeworks Home page', function() {  
    UtilityPage.openBaseURL();  
  });  
    
  it('Input the Email address', function() {  
    LoginPage.inputEmailAddress();
  }); 

  it('Input the Password', function() {  
    LoginPage.inputPassword();
  }); 

  it('Click on the Login button', function() {  
    LoginPage.clickLoginButton();
  }); 

  it('Validate Logout Button is Displayed', function() {  
    LoginPage.validateLogoutButton();
  }); 
  
});

describe('Test 02: Go to Technology > iPhones & Mobile Phones > iPhones and Add First Two Phones', function() {  

  it('Go to Technology > iPhones & Mobile Phones > iPhones', function() {  
    Menu.click_menuTechnologyTab();
    Menu.click_menuIphoneMobilePhoneSection();
    Menu.click_menuIphoneSection();
  }); 

  it('Add First Two Products to Cart', function() {  
    ProductList.click_productList_addToCart1();
    ProductList.click_productList_addToCart2();
  }); 

  it('Go to the Shoping Cart Page', function() {  
    Menu.click_menuCartIcon();
    Menu.click_menuViewCartCheckoutButton();
  }); 

  it('Validate Both the Phones are available in the Cart Page ', function() {  
    CartPage.validate_OrderContent1();
    CartPage.validate_OrderContent2();
  }); 

  it('Remove the 1st Product from the Cart Page', function() {  
    CartPage.click_removeButton1();
  });

  it('Remove the 2nd Product from the Cart Page', function() {  
    CartPage.click_removeButton2();
  });

});

describe('Test 03: Logout from the Officeworks website', function() {
  
  it('Click on the Officeworks Top Logo', function() {  
    UtilityPage.click_officeworksLogo();
  });   

  it('Logout from the System', function() {  
    LoginPage.clickLogoutButton();
  }); 

  it('Validate Login Button is Displayed', function() {  
    LoginPage.validateLoginButton();
  }); 
  
});