import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    "baseUrl": "https://pulse.eco/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: 'ljubisha',
});
