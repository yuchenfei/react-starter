import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import perfectionist from 'eslint-plugin-perfectionist'
import prettierRecommendedConfig from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      jsxA11y.flatConfigs.recommended,
      prettierRecommendedConfig,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    extends: [js.configs.recommended, prettierRecommendedConfig],
    plugins: {
      perfectionist, // https://perfectionist.dev
    },
    settings: {
      perfectionist: {
        type: 'natural',
      },
    },
    rules: {
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          specialCharacters: 'trim',
          internalPattern: ['^@/.*'],
          groups: [
            ['react-type', 'react'],
            ['builtin-type', 'builtin'],
            ['external-type', 'external'],
            ['internal-type', 'internal'],
            ['parent-type', 'parent'],
            ['sibling-type', 'sibling'],
            ['index-type', 'index'],
            'object',
            'unknown',
          ],
          customGroups: {
            type: {
              'react-type': '^react(.*)$',
            },
            value: {
              react: '^react(.*)$',
            },
          },
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          // https://codeguide.co/#attribute-order
          groups: [
            'top',
            'class',
            'data',
            'unique',
            'a11y',
            'unknown',
            'multiline',
            'shorthand',
            'callback',
          ],
          customGroups: {
            top: ['^class$', '^id$', '^name$'],
            class: ['^className$'],
            data: ['^data-.+'],
            unique: ['^src$', '^for$', '^type$', '^href$', '^value$', '^key$'],
            a11y: ['^title$', '^alt$', '^role$', '^aria-.+'],
            callback: '^on.+',
          },
        },
      ],
    },
  }
)
