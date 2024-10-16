import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '**/.docker/**',
      '**/dist/**',
      '**/node_modules/**',
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{mjs,cjs,ts}'],
    rules: {
      'eol-last': ['warn', 'always'],
      'no-trailing-spaces': 'warn',
      'quotes': [2, 'single'],
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'camelcase': 'error',
      'no-var': 'error',
      'eqeqeq': 'error',
      'no-return-await': 'error',
      'space-before-function-paren': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'sort-imports': 'off',
      'space-in-parens': ['error', 'never'],
      'no-multi-spaces': 'error',
      'key-spacing': ['error', { 'beforeColon': false }],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['warn', { 'ignoreRestSiblings': true, 'varsIgnorePattern': '^_' }],
      'padding-line-between-statements': ['error', { 'blankLine': 'never', 'prev': ['import', 'cjs-import'], 'next': ['import', 'cjs-import'] }],
      'no-console': ['warn', { 'allow': ['warn', 'error'] }],
      'ban-ts-ignore': 'off',
      'no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/naming-convention': ['error', {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^[A-Z]',
          'match': true,
        },
      }, {
        'selector': 'typeAlias',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^[A-Z]',
          'match': true,
        },
      }, {
        'selector': 'enum',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^[A-Z]',
          'match': true,
        },
      }, {
        'selector': 'enumMember',
        'format': ['UPPER_CASE'],
      }],
    },
  },
];
