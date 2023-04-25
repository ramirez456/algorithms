module.exports = {
  extends: [ "eslint:recommended", "plugin:@typescript-eslint/recommended" ],
  parser: "@typescript-eslint/parser",
  plugins: [ "@typescript-eslint" ],
  root: true,
  rules: {
    "indent": [ "error", 2 ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ],
    "no-empty": "warn",
    "no-cond-assign": [ "error", "always" ],
    "for-direction": "off",
    "space-in-brackets": "off",
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "computed-property-spacing": [ "error", "always" ],
    "no-var": "error",
    "prefer-const": "error",
    "no-unused-vars": "warn",
    "comma-dangle": [ "warn", "always-multiline" ],
    "no-mixed-spaces-and-tabs": "warn",
    "no-trailing-spaces": "warn",
    "eol-last": [ "warn", "always" ],
    "space-before-blocks": [ "error", "always" ]
  },
};
