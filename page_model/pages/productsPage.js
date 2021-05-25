import { Selector } from 'testcafe'

class productsPage {
    constructor(){
        this.PageTitle = Selector('.title')

        //Navigation
        this.burgerMenu = Selector('#react-burger-menu-btn')
        this.logOutButton = Selector('#logout_sidebar_link')

        //Item Links
        this.onesieLink = Selector('#item_2_title_link')
        this.backPackLink = Selector('#item_4_title_link div')

        //Details Name
        this.detailsNameText = Selector('.inventory_details_name')

        //Shopping Cart
        this.addToCartButton = Selector('#add-to-cart-sauce-labs-backpack')
        this.shoppingCartButton = Selector('.shopping_cart_link')
        this.numberProducts = Selector('.shopping_cart_badge')
        //Add Products
        this.AddsauceLabPackbackItem = Selector('#add-to-cart-sauce-labs-backpack')
        this.AddSauceLabsOnesie = Selector('#add-to-cart-sauce-labs-onesie')

        //Remove Products
        this.removesauceLabPacbackItem = Selector('#remove-sauce-labs-backpack')
        this.removesauceLabOnesie = Selector('#remove-sauce-labs-onesie')
    }
}

export default new productsPage()