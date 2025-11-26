const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    reporter: 'mochawesome',
    reporterOptions: {
        "overwrite": false,
        "html": true,
        "json": false,
        "reportDir": "cypress/reports/"
      }
  },
});
