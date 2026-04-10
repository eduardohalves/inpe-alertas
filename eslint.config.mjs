import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js", "**/*.jsx"],
        plugins: {
            react: reactPlugin,
        },
        languageOptions: {
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "semi": ["error", "always"],
            "quotes": ["error", "single"],
        },
    },
];