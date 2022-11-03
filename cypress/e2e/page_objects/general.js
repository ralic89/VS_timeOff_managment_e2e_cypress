class General {
    get headerTitle () {
        return cy.get ('h1')
    }

    get SuccessfulUpdate(){
        return cy.get('.el-message')
    }
}

export const general = new General()