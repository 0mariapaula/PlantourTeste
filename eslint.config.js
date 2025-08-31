import babelParser from '@babel/eslint-parser';
import react from 'eslint-plugin-react';

export default [

  {
    files: ["**/*.{js,jsx}", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
      },
    },
  plugins: { react },
    rules: {
      "no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["error"] }],
      "react/prop-types": "off",
    },
  },
];
