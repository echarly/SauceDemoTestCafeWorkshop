
Project Name: Sauce Demo

URL: https://www.saucedemo.com/

#Purpose of the Project:

The purpose of the project is test the page saucedemo.com and obtain test scenarios so the company has the best quality page possible. 
The QAs responsability on the project is to create test cases/test scenarios for the site and develope the test scripts in the following language C#.

---------------------------------------------------------------

How-to: Install

#Pre-requisites for installation:

Installation:
+ Visual Studio Code
	- https://code.visualstudio.com/
+ Node Js | TestCafe
	- https://nodejs.org/en/
+ Adding Javascript as language once Visual Studio Code is installed

Language of development: javascript

Step #1: go to the following url: https://github.com/echarly/SauceDemoWorkshopVisualStudio
	Expected: The GitHub page is displayed and the following project is shown: 
	echarly/SauceDemoWorkshopVisualStudio
	
Step #2: Click on the green button that says "Code" with an arrow pointing down.
	Expected: Two options will be displayed:
				- Open with GitHub Desktop
				- Download Zip File

Step #3: Click the option that says "Download Zip file"
	Expected: a Zip file named "SauceDemo-main.zip" will be downloaded in your "downloads" folder.
	
Step #4: UnZip the Zip file named in the previous step. 
	Expected: a set of folders and files will be unzipped into a folder with 13 files.
	
Step #5: Open Visual Studo Code application and click "Open Folder" or press "ctr + O".

Step #6: Navigate to the "SauceDemo" folder which was unzipped 

Step #7: Click "View" in the navigation bar on the top of Visual Studio Code and select 
		 "Terminal" to view the terminal on the bottom. 
     
---------------------------------------------------------------

How-to: Execute the test scenarios

To execute the tests type the following:

	+ testcafe ie '\SauceDemo\page_model\test\login.test.js'
	
	# This code executes all the test cases in the default browser.
	
	+ To execute in different browsers type the following in the terminal and press ENTER.
	
	Chrome:
			- npm run test-all-chrome
	Firefox:
			- npm run test-all-firefox
	IE:
			- npm run test-all-ie 

---------------------------------------------------------------
How-to: The two projects

SauceDemo
The solution is divided into two sections which are: SauceDemo and sauce.test. 
which use the concepts of Page Object Model.

The difference between them is very simple: 
 - SauceDemo contains the classes of each page
 - TestingSauce contains the test scenarios
 
 SauceDemo is comprised as follows:
 
 - Page_model
	|_ data
	|_ pages
	|_ test
	.env file
 
 - data folder
	+ Constants.js : contains the constants that will be used in the project.
		URL
		CREDENTIALS
			VALID_USER
			INVALID_USER
			PROBLEM_USER
		USER_INFORMATION
		PAGE_TITLES

- pages - each page class contains the locators to interact with the each page of the of the
		  project.
	+ checkOutPage.js
	+ LoginPage.js
	+ productsPage.js
	+ shoppingCartPage.js

- test
	+ sauce.test.js : contains the tests that are executed to test the application. 
					 currently there are 10 tests (scenarios) with corresponding asserts.
					 
	Tests:
	1. user can login with valid credentials
	2. User logins with Invalid credentials
	3. User logins in with valid credentials and logs out
	4. User navigates to the shopping cart
	5. User adds a single item to the shopping cart
	6. User adds multiple item to the shopping cart
	7. Continue with missing mail information - problem_user
	8. Fill Users Information | Navigate to "OverView" Page
	9. Final Order Items | Validate items match in "Overview" Page
	10. Complete a Purchase | User Navigates to "Confirmation" Page
	

- dotenv .env file : contains the environment variables that will used in the project.
					 currently there are only two: 
					 - User
					 - Password
		
---------------------------------------------------------------

For any comments or questions please contact: charlyh@gmail.com

Have fun! 
