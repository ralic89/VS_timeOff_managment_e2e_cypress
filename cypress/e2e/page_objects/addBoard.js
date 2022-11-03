class AddBoard {

    get addNewBoardBtn () {
    return cy.get ('li[title="Add new Board"]')
}

    get boardTitleInput () {
        return cy.get ('input[placeholder="Enter title..."]')
    }
    get nextBtn() {
        return cy.get ('button[name="next_btn"]')
    }

    get canbanRadio () {
        return cy.get ('span[name="type_kanban"]')
    }

    get finishBtn () {
        return cy.get ('button[name="next_btn"]')
    }

    addBoardFunc (title) {
        this.addNewBoardBtn.click()
        this.boardTitleInput.type(title)
        this.nextBtn.click()
        this.canbanRadio.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.finishBtn.click()
    }
    

} 

export const addBoard = new AddBoard()