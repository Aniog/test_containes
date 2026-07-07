module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'plugin'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*.config.js', '*.config.cjs', 'vite.config.js'],
      env: { node: true },
    },
    {
      files: ['src/contexts/CartContext.jsx'],
      rules: { 'react-refresh/only-export-components': 'off' },
    },
  ],
};
