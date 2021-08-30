module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'google',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    'jest.config.js',
    '.eslintrc.js',
    '__tests__/functions.test.ts'
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '^omit.*$' }],
    'array-callback-return': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        semi: false,
        arrowParens: 'avoid',
        singleQuote: true,
      },
    ],
  },
}
