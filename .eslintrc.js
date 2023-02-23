module.exports = {
    "env": [
      'plugin:vue/essential',
      '@vue/standard'
    ],

    "extends": "plugin:vue/vue3-essential",

    "overrides": [
    ],

    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },

    "plugins": [
        "vue"
    ],

    "rules": {
    },

    root: true,

    env: {
      browser: true,
      es2021: true,
      node: true
    },

    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@babel/eslint-parser'
    },

    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}
