module.exports = {
  extends: ["eslint-config-airbnb", "prettier", "prettier/react"],
  plugins: ["import", "prettier", "react"],
  rules: {
    "prettier/prettier": "warn",

    // Possible Errors
    "no-console": "error",
    "no-unexpected-multiline": "error",

    // Best Practices
    "class-methods-use-this": "off",
    "consistent-return": [
      "error",
      {
        treatUndefinedAsUnspecified: true
      }
    ],
    "dot-location": ["error", "property"],
    "no-implicit-globals": "error",
    "no-invalid-this": "error",
    "no-param-reassign": [
      "error",
      {
        props: false
      }
    ],
    "no-unmodified-loop-condition": "error",
    "no-useless-call": "error",
    "no-void": "off",

    // Variables
    "no-catch-shadow": "error",
    "no-label-var": "error",
    "no-shadow": [
      "error",
      { allow: ["cb", "next", "req", "res", "err", "error"] }
    ],
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-use-before-define": ["error", "nofunc"],
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "no-unused-vars": ["error", { args: "none" }],

    // React
    "react/no-danger": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-is-mounted": "error",
    "react/no-set-state": "error",
    "react/no-string-refs": "error",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "off",
    "react/self-closing-comp": "off",

    // JSX
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-indent": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": "off", // fixed by prettier
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
    "react/jsx-wrap-multilines": "error",

    // ECMAScript 6
    "constructor-super": "error",
    "generator-star-spacing": ["error", "after"],
    "no-this-before-super": "error",
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true
      }
    ],
    "prefer-spread": "error",
    "prefer-template": "off",

    // a11y
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"]
      }
    ],
    "jsx-a11y/label-has-for": [
      2,
      {
        components: ["Label"],
        required: {
          every: ["nesting", "id"]
        },
        allowChildren: false
      }
    ]
  },
  env: {
    browser: true,
    es6: true
  }
};
