const {defineConfig} = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 15000,
    responseTimeout: 15000,
    pageLoadTimeout: 60000,

    setupNodeEvents(on, config) {
    },
  },
});
