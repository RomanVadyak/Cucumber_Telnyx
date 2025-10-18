const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const esbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: "https://telnyx.com/",
    watchForFileChanges: false,
    viewportWidth: 1366,
    viewportHeight: 768,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      const preprocessor = esbuildPlugin.default || esbuildPlugin;
      on(
        "file:preprocessor",
        createBundler({
          plugins: [preprocessor(config)],
        })
      );

      return config;
    },
  },
});
