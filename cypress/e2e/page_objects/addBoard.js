import { faker } from "@faker-js/faker";

class AddBoard {
  get addNewBoardBtn() {
    return cy.get('[class="vs-c-organization-boards__item--add-new"]');
  }

  get boardTitleInput() {
    return cy.get('input[placeholder="Enter title..."]');
  }
  get nextBtn() {
    return cy.get('button[name="next_btn"]');
  }

  get canbanRadio() {
    return cy.get('span[name="type_kanban"]');
  }
  get okBtn() {
    return cy.get(".vs-c-modal--features-button > .vs-c-btn");
  }

  addBoardFunc(title) {
    this.okBtn.click();
    this.addNewBoardBtn.click();
    this.boardTitleInput.type(faker.name.jobTitle());
    this.nextBtn.click();
    this.canbanRadio.click({ force: true });
    this.nextBtn.click();
    this.nextBtn.click();
    this.nextBtn.click();
  }
}

export const addBoard = new AddBoard();
