import { Selector } from 'testcafe'

class ShoppingCartPage {
    constructor(){
        this.shoppingCartTitle = Selector('.title')
        this.checkoutButton = Selector('#checkout')
    }
}

export default new ShoppingCartPage()