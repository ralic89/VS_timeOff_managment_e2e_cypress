const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env : {
      validEmail : "dragan@dragan.com",
      validPassword : "Nada1111!"
    },
    baseUrl : "https://cypress.vivifyscrum-stage.com",
    watchForFileChanges : false
  },
});
