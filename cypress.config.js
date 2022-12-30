const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      validEmail: "dragan@dragan.com",
      validPassword: "Nada1111!",
      envToken: "",
      orgId: "",
      boardId: "",
      memberEmail : 'test@test.com' ,
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com",
    watchForFileChanges: false,
  },
});
