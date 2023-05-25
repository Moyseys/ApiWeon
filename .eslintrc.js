module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'spaced-comment': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    camelcase: 'off',
  },
};
