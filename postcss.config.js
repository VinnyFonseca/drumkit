const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    modules: true,
    plugins: [
        autoprefixer,
        cssnano,
        postcssPresetEnv
    ]
};
