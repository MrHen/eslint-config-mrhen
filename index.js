module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    plugins: [
        'unicorn'
    ],
    rules: {
        'unicorn/prefer-flat-map': 'error'
    }
};
