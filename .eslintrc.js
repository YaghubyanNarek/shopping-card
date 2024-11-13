module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',           // Basic ESLint rules
      'plugin:@typescript-eslint/recommended', // TypeScript rules
      'plugin:react/recommended',     // React rules
      'plugin:react-hooks/recommended', // React hooks rules
      'prettier',                     // Prettier config
    ],
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    settings: {
      react: {
        version: 'detect',            // Detect the React version
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    rules: {
      // Example ESLint rules
      'prettier/prettier': 'error',   // Show prettier errors as ESLint errors
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional for TypeScript
      'react/react-in-jsx-scope': 'off', // For new JSX transform in React 17+
    },
  };
  