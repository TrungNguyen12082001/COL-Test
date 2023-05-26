module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["**/tests/**/*.test.(js|jsx)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/__mocks__/styleMock.js",
  },
  testEnvironment: "jest-environment-jsdom",
};
