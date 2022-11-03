class Edit {
    get firstBoard () {
        return cy.get ('div[class="vs-c-img--avatar vs-c-img--board-avatar"]').eq(0)
    }

    get titleInput () {
        return cy.get('input[data-vv-rules="required|max:50"]')
    }
    get descriptionInput () {
        return cy.get ('textarea[name="description"')
    }
    
    get updateBtn () {
        return cy.get ('button[class="vs-c-btn vs-c-btn--primary vs-c-btn--spaced vs-u-font-weight-bold vs-c-btn-auth--top-gap"]')
    }


    get editBtn () {
        return cy.get('[data-cy="board-configuration"]')
    }

    getFirstBoardFunc () {
        this.firstBoard.click()
        this.editBtn.click()
    }

    editFunc (title , description) {
        this.titleInput.clear().type(title)
        this.descriptionInput.clear().type(description)
        this.updateBtn.click()
    }


}
export const edit = new Edit()