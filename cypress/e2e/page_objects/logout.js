class Logout {
    get imgBtn () {
        return cy.get('a[href="/account"]')
    }
    
    get profileBtn () {
        return cy.get('a[href="/account/settings"]')
    }

    get logoutBtn () {
        return cy.get ('button[class="vs-c-btn vs-c-btn--link vs-c-btn--danger"]')
    }

    logoutFunc(){
        this.imgBtn.click()
        this.profileBtn.click()
        this.logoutBtn.click()
    }
}
export const logout = new Logout ()