class LoginClass {
    get emailInput () {
        return cy.get ('input[type="email"]')
    }

    get passwordInput () {
        return cy.get ('input[type="password"]')
    }

    get loginBtn () {
        return cy.get ('button[type="submit"]')
    }

    loginFunc (email = Cypress.env ('validEmail') , password = Cypress.env ('validPassword')){
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.loginBtn.click()

    }

}

export const loginClass = new LoginClass()