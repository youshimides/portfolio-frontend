module.exports = [
  { ignores: ['dist'] },
  {
    files: ['*/.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { browser: true },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': require('eslint-plugin-react-hooks'),
      'react-refresh': require('eslint-plugin-react-refresh'),
    },
    rules: {
      ...require('@eslint/js').configs.recommended.rules,
      ...require('eslint-plugin-react-hooks').configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]