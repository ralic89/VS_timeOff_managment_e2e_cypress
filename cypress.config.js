const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env : {
      validEmail : "ralic89@hotmail.com",
      validPassword : "ralic1234"
    },
    baseUrl : "https://cypress.vivifyscrum-stage.com/",
    watchForFileChanges : false
  },
});
