import { faker } from "@faker-js/faker";

class Navigation {
  get teamMembers() {
    return cy.get('a[href="/boards/13575/team"]');
  }

  get member() {
    return cy.get('img[alt="avatar"]');
  }

  get timeOffTab() {
    return cy.get(".el-tabs__nav > :nth-child(4)");
  }

  get numberOfVacationDaysInput() {
    return cy.get('input[placeholder="Member’s Vacation Days"]');
  }

  get vacatioUpdateBtn() {
    return cy.get(
      'button[class="vs-c-btn vs-c-btn--sm vs-u-text--uppercase vs-c-btn--primary"]'
    );
  }

  get addEvent() {
    return cy.get('div[class="vs-c-media"]').eq(1);
  }

  get eventOption() {
    return cy.get('a[class="vs-c-btn vs-c-btn--link"]');
  }
  get vacationOption() {
    return cy.get('div[class="vs-c-timeline__activity-edit"]').eq(0);
  }

  get calendarOpen() {
    return cy.get('input[readonly="readonly"]');
  }

  get selectToday() {
    return cy.get(".is-left > .el-date-table > tbody > :nth-child(6) > .today");
  }

  get selectFutureDay() {
    return cy.get(
      ".is-left > .el-date-table > tbody > :nth-child(6) > :nth-child(6)"
    );
  }
  get addBtn() {
    return cy
      .get(
        'button[class="vs-c-btn vs-c-btn--sm vs-c-btn--link vs-u-text--uppercase vs-c-btn--outlined"]'
      )
      .eq(1);
  }

  get sickLeaveOption() {
    return cy.get(".el-dropdown-menu > :nth-child(3)");
  }
  get sickDay() {
    return cy.get(
      ".is-right > .el-date-table > tbody > :nth-child(4) > :nth-child(3)"
    );
  }

  get parentalleaveOption() {
    return cy.get(".el-dropdown-menu > :nth-child(2)");
  }

  get deleteBtn() {
    return cy.get(".el-button--mini.el-tooltip:nth-child(2)");
  }

  get confirmDeleteBtn() {
    return cy.get('button[name="save-btn"');
  }

  get paidTimeOffOption() {
    return cy.get(".el-dropdown-menu > :nth-child(4)");
  }

  get usedDaysVac() {
    return cy.get("span").contains("3d");
  }

  get usedDaysSick() {
    return cy.get("span").contains("1d");
  }

  get UnpaidTimeOffOption() {
    return cy.get(".el-dropdown-menu > :nth-child(5)");
  }

  get otherOption() {
    return cy.get(".el-dropdown-menu > :nth-child(6)");
  }

  get vacationPeriod() {
    return cy.get('span[class="vs-c-time-off__time-text_span"]');
  }
  timeOffFunc() {
    this.teamMembers.click();
    this.member.click();
    this.timeOffTab.click();
  }

  numberOfVacationFunc(Number) {
    this.numberOfVacationDaysInput.clear().type(Number);
    this.vacatioUpdateBtn.click();
  }

  chooseVacation() {
    this.addEvent.click();
    this.vacationOption.click();
    this.calendarOpen.click();
    this.selectToday.click();
    this.selectFutureDay.click();
    this.addBtn.click();
  }

  chooseSickLeave() {
    this.addEvent.click();
    this.eventOption.click();
    this.sickLeaveOption.click();
    this.calendarOpen.click();
    this.sickDay.click().click();
    this.addBtn.click();
  }

  deleteEventFunc() {
    cy.get(".el-button--mini.el-tooltip:nth-child(2)").click({ force: true });
    this.confirmDeleteBtn.click();
  }

  chooseParentalLeave() {
    this.addEvent.click();
    this.eventOption.click();
    this.parentalleaveOption.click();
    this.calendarOpen.click();
    this.selectToday.click();
    this.selectFutureDay.click();
    this.addBtn.click();
  }

  choosePaidTimeOff() {
    this.addEvent.click();
    this.eventOption.click();
    this.paidTimeOffOption.click();
    this.calendarOpen.click();
    this.selectToday.click();
    this.selectFutureDay.click();
    this.addBtn.click();
  }

  choosePaidTimeOff() {
    this.addEvent.click();
    this.eventOption.click();
    this.paidTimeOffOption.click();
    this.calendarOpen.click();
    this.selectToday.click();
    this.selectFutureDay.click();
    this.addBtn.click();
  }

  chooseUnpaidTimeOff() {
    this.addEvent.click();
    this.eventOption.click();
    this.UnpaidTimeOffOption.click();
    this.calendarOpen.click();
    this.selectToday.click();
    this.selectFutureDay.click();
    this.addBtn.click();
  }
  chooseOther() {
    this.addEvent.click();
    this.eventOption.click();
    this.otherOption.click();
    cy.get('input[placeholder="Name"]').click().type("Novi event");
    this.calendarOpen.click();
    this.selectToday.click();
    this.selectFutureDay.click();
    this.addBtn.click();
  }
}

export const navigation = new Navigation();
