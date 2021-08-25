/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {

  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branch: 80,
      funtions: 80,
      lines: 80,
      statements: 80
    }
  },
  verbose: true
};
