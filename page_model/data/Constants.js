import dotenv from 'dotenv'
dotenv.config()
//require('dotenv').config()

export const URLS = {
    PAGE_URL: 'https://www.saucedemo.com/'
}

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USER,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME:'standard',
        PASSWORD:'secret_sauce'
    },
    PROBLEM_USER:{
        USERNAME:'problem_user',
        PASSWORD:'secret_sauce'
    }
}

export const USER_INFORMATION = {
    USER_INFO:{
        FIRSTNAME:'User_FirstName',
        LASTNAME:'User_LastName',
        ZIPCODE:'12345'
    }
}

export const PAGE_TITLES = {
    TITLES:{
        PRODUCTS_PAGE:'PRODUCTS',
        SHOPPINGCART_PAGE:'YOUR CART',
        CHECKOUT_INFO:'CHECKOUT: YOUR INFORMATION',
        CHECKOUT_OVERVIEW:'CHECKOUT: OVERVIEW',
        CHECKOUT_COMPLETE:'CHECKOUT: COMPLETE!'
    },
    PAGE_TEXTS:{
        INVALID_USER_ERRORMSG:'Epic sadface: Username and password do not match any user in this service',
        USER_MAIL_INFO_ERRORMSG:'Error: Last Name is required',
        USER_THANKYOU_MSG:'THANK YOU FOR YOUR ORDER',
        USER_ORDERDISPATCH_MSG:'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    }
}