import productsPage from "../pages/productsPage";
import LoginPage from "../pages/LoginPage";
import shoppingCartPage from "../pages/shoppingCartPage";
import { CREDENTIALS, USER_INFORMATION, PAGE_TITLES, URLS } from "../data/Constants"
import checkOutPage from "../pages/checkOutPage";

fixture('Login feature testing')
    .page (`${URLS.PAGE_URL}`)

test('1. user can login with valid credentials', async t=> {
    //Login Page
    console.log(CREDENTIALS.VALID_USER.USERNAME)
    console.log(CREDENTIALS.VALID_USER.PASSWORD)

    await LoginPage.UserLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t
    .expect(productsPage.PageTitle.exists).ok()
    .expect(productsPage.PageTitle.innerText).eql(PAGE_TITLES.TITLES.PRODUCTS_PAGE)
})

test('2. User logins with Invalid credentials', async t=> {
    //Login Page
    await LoginPage.UserLogin(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t
    .expect(LoginPage.errorMessage.exists).ok()
    .expect(LoginPage.errorMessage.innerText).eql(PAGE_TITLES.PAGE_TEXTS.INVALID_USER_ERRORMSG)
})

test('3. User logins in with valid credentials and logs out', async t=> {
    //Login Page
    await LoginPage.UserLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t
        .click(productsPage.burgerMenu)
        .click(productsPage.logOutButton)

    //Assert Username Field is present
    await t
        .expect(LoginPage.usernameField.exists).ok()
})

test('4. User navigates to the shopping cart', async t=> {
    //Login Page
    await LoginPage.UserLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    //Assert Inventory Page Title
    await t.expect(productsPage.PageTitle.exists).ok()

    //Click Shopping Cart Button
    await t.click(productsPage.shoppingCartButton)

    //Assert Shopping Cart Page Title
    await t
    .expect(shoppingCartPage.shoppingCartTitle.exists).ok()
    .expect(shoppingCartPage.shoppingCartTitle.innerText).eql(PAGE_TITLES.TITLES.SHOPPINGCART_PAGE)
})

test('5. User adds a single item to the shopping cart', async t=> {
    //Login Page
    await LoginPage.UserLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    
    //Click Add 'sauce lab pack pack'
    await t.click(productsPage.AddsauceLabPackbackItem)

    //Assert 'Remove' button is displayed
    await t.expect(productsPage.removesauceLabPacbackItem.exists).ok()

    //Clicks the 'Shopping Cart' button
    await t.click(productsPage.shoppingCartButton)

    //Assert 'Remove' button is displayed
    await t.expect(productsPage.removesauceLabPacbackItem.exists).ok()
})

test('6. User adds multiple item to the shopping cart', async t=> {
    //Login Page
    await LoginPage.UserLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    //Click Add 'sauce lab pack pack'
    await t
        .click(productsPage.AddsauceLabPackbackItem)
        .click(productsPage.AddSauceLabsOnesie)

    await t
    .expect(productsPage.removesauceLabPacbackItem.exists).ok()
    .expect(productsPage.removesauceLabOnesie.exists).ok()

    //Clicks the 'Shopping Cart' button
    await t
        .click(productsPage.shoppingCartButton)

        //Assert Shopping cart title
        .expect(shoppingCartPage.shoppingCartTitle.exists).ok()
        .expect(productsPage.removesauceLabPacbackItem.exists).ok()
        .expect(productsPage.removesauceLabOnesie.exists).ok()

})

test('7. Continue with missing mail information - problem_user', async t=> {
    //Login Page
    //--- Problem User
    await LoginPage.UserLogin(CREDENTIALS.PROBLEM_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    //Assert
    await t.expect(productsPage.PageTitle.innerText).eql(PAGE_TITLES.TITLES.PRODUCTS_PAGE)

    //Click Add 'sauce lab pack pack'
    await t
        .click(productsPage.AddsauceLabPackbackItem)

    await t
    .expect(productsPage.removesauceLabPacbackItem.exists).ok()

    //Clicks the 'Shopping Cart' button
    await t
        .click(productsPage.shoppingCartButton)

        //Assert Shopping cart title
        .expect(shoppingCartPage.shoppingCartTitle.exists).ok()
        .expect(productsPage.removesauceLabPacbackItem.exists).ok()
        .click(shoppingCartPage.checkoutButton)
        .expect(checkOutPage.checkoutPageTitle.exists).ok()
        
        //User adds FirstName,LastName, Zipcode and clicks continue
        await checkOutPage.UserMailInformationForm(
            USER_INFORMATION.USER_INFO.FIRSTNAME,
            USER_INFORMATION.USER_INFO.LASTNAME,
            USER_INFORMATION.USER_INFO.ZIPCODE)

        await t
        .expect(checkOutPage.errorMsg.exists).ok()
        .expect(checkOutPage.errorMsg.innerText).eql(PAGE_TITLES.PAGE_TEXTS.USER_MAIL_INFO_ERRORMSG)
})

test('8.Fill Users Information | Navigate to "OverView" Page', async t=> {
    //Login Page
    await LoginPage.UserLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    //Assert 'Products' Page is displayed
    await t.expect(productsPage.PageTitle.innerText).eql(PAGE_TITLES.TITLES.PRODUCTS_PAGE)

    //Click Add 'sauce lab pack pack'
    await t
        .click(productsPage.AddsauceLabPackbackItem)

    await t
    .expect(productsPage.removesauceLabPacbackItem.exists).ok()

    //Clicks the 'Shopping Cart' button
    await t
        .click(productsPage.shoppingCartButton)

        //Assert Shopping cart title
        .expect(shoppingCartPage.shoppingCartTitle.exists).ok()
        .expect(productsPage.removesauceLabPacbackItem.exists).ok()
        .click(shoppingCartPage.checkoutButton)
        .expect(checkOutPage.checkoutPageTitle.exists).ok()
        
        //User adds FirstName,LastName, Zipcode and clicks continue
        await checkOutPage.UserMailInformationForm(
            USER_INFORMATION.USER_INFO.FIRSTNAME,
            USER_INFORMATION.USER_INFO.LASTNAME,
            USER_INFORMATION.USER_INFO.ZIPCODE)

        //Assert 'Overview' title
        await t
            .expect(checkOutPage.checkoutPageTitle.exists).ok()
            .expect(checkOutPage.checkoutPageTitle.innerText).eql(PAGE_TITLES.TITLES.CHECKOUT_OVERVIEW)
})

test('9.Final Order Items | Validate items match in "Overview" Page', async t=> {
    //Login Page
    await LoginPage.UserLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    //Products Page
    //Assert 'Products' Page is displayed
    await t.expect(productsPage.PageTitle.innerText).eql(PAGE_TITLES.TITLES.PRODUCTS_PAGE)

    //Click Add 'sauce lab pack pack'
    await t
        .click(productsPage.backPackLink)
        .click(productsPage.AddsauceLabPackbackItem)

    await t
    .expect(productsPage.removesauceLabPacbackItem.exists).ok()
    .expect(productsPage.detailsNameText.exists).ok()
    .expect(productsPage.detailsNameText.innerText).eql('Sauce Labs Backpack')

    //Clicks the 'Shopping Cart' button
    await t
        .click(productsPage.shoppingCartButton)

    //Shopping Cart
        //Assert Shopping cart title
        .expect(shoppingCartPage.shoppingCartTitle.exists).ok()
        .expect(productsPage.removesauceLabPacbackItem.exists).ok()
        .click(shoppingCartPage.checkoutButton)

    //Checkout Page    
        .expect(checkOutPage.checkoutPageTitle.exists).ok()
        
        //User adds FirstName,LastName, Zipcode and clicks continue
        await checkOutPage.UserMailInformationForm(
            USER_INFORMATION.USER_INFO.FIRSTNAME,
            USER_INFORMATION.USER_INFO.LASTNAME,
            USER_INFORMATION.USER_INFO.ZIPCODE)

    //Checkout: Overview Page
        //Assert 'Overview' title
        await t
            .expect(checkOutPage.checkoutPageTitle.exists).ok()
            .expect(checkOutPage.checkoutPageTitle.innerText).eql(PAGE_TITLES.TITLES.CHECKOUT_OVERVIEW)
            .expect(productsPage.backPackLink.exists).ok()
            .expect(productsPage.backPackLink.innerText).eql('Sauce Labs Backpack')
})

test('10.Complete a Purchase | User Navigates to "Confirmation" Page', async t=> {
    //Login Page
    await LoginPage.UserLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    //Products Page
    //Assert 'Products' Page is displayed
    await t.expect(productsPage.PageTitle.innerText).eql(PAGE_TITLES.TITLES.PRODUCTS_PAGE)

    //Click Add 'sauce lab pack pack'
    await t
        .click(productsPage.backPackLink)
        .click(productsPage.AddsauceLabPackbackItem)
        .expect(productsPage.numberProducts.exists).ok()

    await t
    .expect(productsPage.removesauceLabPacbackItem.exists).ok()
    .expect(productsPage.detailsNameText.exists).ok()
    .expect(productsPage.detailsNameText.innerText).eql('Sauce Labs Backpack')

    //Clicks the 'Shopping Cart' button
    await t
        .click(productsPage.shoppingCartButton)

    //Shopping Cart
        //Assert Shopping cart title
        .expect(shoppingCartPage.shoppingCartTitle.exists).ok()
        .expect(productsPage.removesauceLabPacbackItem.exists).ok()
        .click(shoppingCartPage.checkoutButton)

    //Checkout Page    
        .expect(checkOutPage.checkoutPageTitle.exists).ok()
        
        //User adds FirstName,LastName, Zipcode and clicks continue
        await checkOutPage.UserMailInformationForm(
            USER_INFORMATION.USER_INFO.FIRSTNAME,
            USER_INFORMATION.USER_INFO.LASTNAME,
            USER_INFORMATION.USER_INFO.ZIPCODE)

    //Checkout: Overview Page
        //Assert 'Overview' title
        await t
            .expect(checkOutPage.checkoutPageTitle.exists).ok()
            .expect(checkOutPage.checkoutPageTitle.innerText).eql(PAGE_TITLES.TITLES.CHECKOUT_OVERVIEW)
            .expect(productsPage.backPackLink.exists).ok()
            .expect(productsPage.backPackLink.innerText).eql('Sauce Labs Backpack')
            .click(checkOutPage.finishButton)

            //Order Completed - Asserts
            .expect(checkOutPage.checkoutPageTitle.innerText).eql(PAGE_TITLES.TITLES.CHECKOUT_COMPLETE)
            .expect(checkOutPage.thankYouText.innerText).eql(PAGE_TITLES.PAGE_TEXTS.USER_THANKYOU_MSG)
            .expect(checkOutPage.dispatchedText.innerText).eql(PAGE_TITLES.PAGE_TEXTS.USER_ORDERDISPATCH_MSG)
})