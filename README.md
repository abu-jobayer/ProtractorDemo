## Instalation Process:

1. Download and Install Node.js from https://nodejs.org/en/download/
2. Instal JDE in your system
3. Use npm install to install all the package necessary for this test through package.json

# Can setup all the package as well:
1. Install Protractor globally by execute: npm install -g protractor 
2. Update the Webdriver library of Selenium: webdriver-manager update
3. Setup Jesmine Allure Report: npm i jasmine-allure-reporter
4. Install Comandline plugins for Allure Report: npm install -g allure-commandline --save-dev
5. Install Babel: npm install babel-cli babel-core --save-dev
6. install the ECMAScript 2015 preset: npm install babel-preset-es2015 --save-dev
7. 

## Tests Structure
1. In conf.js contains all the Configuration of the Test Suite
2. In './pages' contains all the Locators and methods for individual pages.
3. In './specs' contain the Test scripts.
4. In './Data' contain the json file using to get the data. 




## Run The test
protractor conf.js

## Generate Report:
npm run report

## Open the report:
allure open allure-report

## Distribute the Report:
1. zip both allure-report and allure-results.
2. Unzip both and open index.html from './allure-report' in Firefox Browser.
