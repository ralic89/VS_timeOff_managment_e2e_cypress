class General {
  get headerTitle() {
    return cy.get("h1").eq(4);
  }

  get memberHeaderTitle() {
    return cy.get(".vs-c-modal__header > h4");
  }

  get SuccessfulUpdate() {
    return cy.get(".el-message__group > p");
  }

  get totalNmbrOfUnusedDays() {
    return cy.get('span[class="c-vacation-days__value"]');
  }

  get vacationAssert() {
    return cy.get(
      'div[style="width: 100%; background-color: rgb(168, 206, 72);"]'
    );
  }

  get sickLeaveAssert() {
    return cy.get(
      '[style="width: 100%; background-color: rgb(72, 206, 149);"]'
    );
  }

  get parentalLeaveAssert() {
    return cy.get(
      'div[style="width: 100%; background-color: rgb(224, 148, 238);"]'
    );
  }

  get paidTimeOffAssert() {
    return cy.get(
      'div[style="width: 100%; background-color: rgb(237, 176, 68);"]'
    );
  }
  get unpaidTimeOffAssert() {
    return cy.get(
      'div[style="width: 100%; background-color: rgb(92, 190, 237);"]'
    );
  }

  get otherAssert() {
    return cy.get(
      'div[style="width: 100%; background-color: rgb(72, 186, 206);"]'
    );
  }
}

export const general = new General();
