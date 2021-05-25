import { Selector, t } from 'testcafe'

class CheckOutPage {
    constructor(){
        //Title
        this.checkoutPageTitle = Selector('.title')

        //User's Information
        this.firstname = Selector('#first-name')
        this.lastname = Selector('#last-name')
        this.zipcode = Selector('#postal-code')
        this.continueButton = Selector('#continue')
        this.errorMsg = Selector('.error-message-container')

        //Checkout: Overview
        this.finishButton = Selector('#finish')
        this.TotalText = Selector('.summary_total_label')

        //Checkout:Complete
        this.thankYouText = Selector('.complete-header')
        this.dispatchedText = Selector('.complete-text')
    }

    async UserMailInformationForm(firstName, LastName, Zipcode){
        await t
        .typeText(this.firstname, firstName)
        .typeText(this.lastname, LastName)
        .typeText(this.zipcode, Zipcode)
        .click(this.continueButton)
    }
}

export default new CheckOutPage()