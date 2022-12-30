import { loginClass } from "../e2e/page_objects/loginPage";
import { faker } from "@faker-js/faker";
import { addBoard } from "../e2e/page_objects/addBoard";

var token;
Cypress.Commands.add("login", () => {
  cy.intercept(
    "POST",
    "https://cypress-api.vivifyscrum-stage.com/api/v2/login"
  ).as("loginRequest");
  cy.visit("/login");
  loginClass.loginFunc();
  cy.url().should("contain", "my-organizations");
  cy.wait("@loginRequest").then((intercept) => {
    // console.log(intercept)
    // expect(intercept.response.statusCode).to.eq(200);
    token = intercept.response.body.token;
    window.localStorage.setItem("token", token);
    Cypress.env("envToken", token);
  });
});

Cypress.Commands.add("addOrg", () => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
    form: true,
    body: {
      name: faker.name.jobTitle(6),
      avatar_crop_cords: {},
    },
    headers: {
      authorization: `Bearer ${Cypress.env("envToken")}`,
    },
  }).then((response) => {
    // console.log(response)
    Cypress.env("orgId", response.body.id);
  });
});

Cypress.Commands.add("loginBE", () => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    body: {
      email: Cypress.env("validEmail"),
      password: Cypress.env("validPassword"),
    },
  })
    .its("body")
    .then((response) => {
      window.localStorage.setItem("token", response.token);
      Cypress.env("envToken", token);
      window.localStorage.setItem("user", JSON.stringify(response.user));
      window.localStorage.setItem("user_id", response.user.id);
    });
});

Cypress.Commands.add("deleteOrganization", () => {
  cy.request({
    method: "POST",
    url: `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/${Cypress.env(
      "orgId"
    )}`,
    body: { passwordOrEmail: Cypress.env("validPassword") },
    headers: { authorization: `Bearer ${Cypress.env("envToken")}` },
  });
});

Cypress.Commands.add("addNewBoard", () => {
  cy.intercept(
    "POST",
    "https://cypress-api.vivifyscrum-stage.com/api/v2/boards"
  ).as("fakeAdd");
  addBoard.addBoardFunc();
  cy.wait("@fakeAdd").then((intercept) => {
    // console.log (intercept)
    Cypress.env("boardId", intercept.response.body.id);
    expect(intercept.response.statusCode).to.eq(201);
  });
});
