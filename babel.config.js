const plugins = ["@babel/plugin-proposal-class-properties"];

const presets = [
    [
        "@babel/preset-react",
        {
            "targets": {
                "chrome": "67",
                "edge": "17",
                "firefox": "60",
                "safari": "11.1",
            },
            "useBuiltIns": "usage",
        },
    ],
];

// eslint-disable-next-line no-undef
module.exports = {
    plugins,
    presets,
};
