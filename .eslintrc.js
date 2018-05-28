module.esports = {
  plugins: 'react',
  extends: [
    'plugin:react/recommended',
    'cheshireswift',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'error',
  },
}
