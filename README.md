# ReactHooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Criando estados dentro de funções e tendo acesso ao ciclo de vida de um componente

`yarn add eslint-plugin-react-hooks -D`

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks' // este
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'react-hooks/rules-of-hooks': 'error', // este
    'react-hooks/exhaustive-deps': 'warn' // este
  },
};
```
