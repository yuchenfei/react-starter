# React Starter

A basic React starter template with Vite, TypeScript, ESLint, and Prettier etc.

## Tech Stack

- Start with `pnpm create vite my-vue-app --template vue-ts`
  - [Vite](https://vite.dev/guide/)
    - [@vitejs/plugin-react-swc](https://www.npmjs.com/package/@vitejs/plugin-react-swc)
    - [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
  - [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite)
  - [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
- Code Quality
  - [ESLint](https://eslint.org/)
    - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
    - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
    - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
    - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
    - [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
    - [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
    - [eslint-plugin-perfectionist](https://www.npmjs.com/package/eslint-plugin-perfectionist)
  - [Prettier](https://prettier.io/)
- Committing
  - [Husky](https://typicode.github.io/husky/#/)
  - [lint-staged](https://www.npmjs.com/package/lint-staged)
  - [Commitlint](https://commitlint.js.org/#/)
    - [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)
    - [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
- [TanStack Router](https://tanstack.com/router/latest)
  - [@tanstack/router-plugin](https://www.npmjs.com/package/@tanstack/router-plugin)
  - [@tanstack/router-devtools](https://www.npmjs.com/package/@tanstack/router-devtools)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
