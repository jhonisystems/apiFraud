module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "google"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 2018,
      experimentalObjectRestSpread: true
    },
    sourceType: "module"
  },
  rules: {
    "quotes": ["error", "double"],
    "linebreak-style": 0,
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false
        }
      }
    ],
    "comma-dangle": ["error", "never"],
    "new-cap": ["error", {newIsCap: true}]
  }
};
