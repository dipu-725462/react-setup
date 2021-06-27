const path = require('path');

const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const config = {
  externals: [nodeExternals()],
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(baseConfig, config);
