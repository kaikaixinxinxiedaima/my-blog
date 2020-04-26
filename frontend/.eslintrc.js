module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'eslint-plugin-vue',
    '@typescript-eslint',
    'prettier',
    'local',
  ],
  rules: {
    '@typescript-eslint/class-name-casing': 'warn',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off', // Manual
    '@typescript-eslint/no-explicit-any': 'off', // Manual
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
      },
    ],
    'arrow-parens': ['off', 'as-needed'],
    curly: ['error', 'multi-line'],
    'consistent-this': 'warn',
    'eol-last': 'off',
    'no-undef': 'off', // ts
    'no-case-declarations': 'off', // ts
    'getter-return': 'off', // ts
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-console': 'error',
    'no-dupe-class-members': 'off', // ts
    'no-extra-semi': 'off',
    'no-fallthrough': 'error',
    'no-invalid-this': 'off', // ts
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-unexpected-multiline': 'off', // eslint-config-prettier#32
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': 'off',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    radix: 'error',
    'space-before-function-paren': 'off',
    'prettier/prettier': 'error',
    'local/jsx-uses-vars': 'error',
  },
}
