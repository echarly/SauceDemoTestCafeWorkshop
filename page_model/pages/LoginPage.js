import { Selector, t } from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('.error h3')
    }

    async UserLogin(username, password){
        await t
            .typeText(this.usernameField, username, {paste:true})
            .typeText(this.passwordField, password, {paste:true})
            .click(this.loginButton)
    }

}

export default new LoginPage()