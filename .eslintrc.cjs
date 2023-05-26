module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'prettier', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-param-reassing': 0,
    'vue/multi-word-commponent-names': 0,
    'vue/attribute-hyphenation': 0,
    'vue/v-on-event-hyphenation': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': [
      'off',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'vue/multi-word-component-names': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-console': 'off',

  },
}
