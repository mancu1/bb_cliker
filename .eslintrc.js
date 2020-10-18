module.exports = {
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
};
