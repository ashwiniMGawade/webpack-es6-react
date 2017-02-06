const webpackStripLoader = require('strip-loader');
const devConfig = require('./webpack.config.js');

const stripLoader = {
    test: [/\.js$/, /\.es6/, /\.jsx/],
    exclude:/node_modules/,
    loader:webpackStripLoader.loader('console.log')  // can accept , seperated arguments or strings to strip
}

devConfig.module.rules.push(stripLoader);

module.exports = devConfig;