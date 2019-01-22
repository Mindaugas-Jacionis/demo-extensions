const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { paths } = require('./webpack.constants.config');
const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new CleanWebpackPlugin(paths.BUILD)],
});
