/// <reference types="cypress" />

import data from "../fixtures/data.json";
import { faker } from "@faker-js/faker";
import { members } from "./page_objects/members";
import { addBoard } from "./page_objects/addBoard";

var token;
describe("VivifyScrum testing", () => {
  before("Login from BackEnd", () => {
    cy.login();
    // cy.visit('/my-organizations')
    // cy.url().should('contain' , '/my-organizations')
  });

  beforeEach("Add new Organization", () => {
    cy.addOrg();
  });

  it("Connect team member with board", () => {
    cy.visit(`organizations/${Cypress.env("orgId")}/boards`);
    cy.addNewBoard();
    members.addTeamMemberFunc();
  });

  afterEach("Delete organization", () => {
    cy.deleteOrganization();
  });
});
