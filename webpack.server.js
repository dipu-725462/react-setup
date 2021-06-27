const path = require('path');

const nodeExternals = require('webpack-node-externals');


module.exports = {
  mode: 'production',
  externals: [nodeExternals()],
  target: 'node',
  watch: true,
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
     {
      test: /\.js$/,
      loader: "babel-loader",
      exclude: path.resolve(__dirname, "node_modules")
     }
    ],
   },
  resolve: {
    extensions: ['.jsx', '.js'],
  }
}
