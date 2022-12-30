import { faker } from "@faker-js/faker";

class Members {
  get getTeamMembers() {
    return cy.get(
      '[data-cy="board-team-members"] > span > div > .vs-c-site-logo'
    );
  }
  get addTeamMember() {
    return cy.get('[class="vs-c-team-member vs-c-team-member__add-btn"]');
  }
  get emailOrNameInput() {
    return cy.get('[class="multiselect__input"]');
  }
  get inviteBtn() {
    return cy.get('[name="save-btn"]');
  }

  addTeamMemberFunc() {
    this.getTeamMembers.click();
    this.addTeamMember.click();
    this.emailOrNameInput.type(Cypress.env("memberEmail"));
    this.inviteBtn.click();
  }
}

export const members = new Members();
