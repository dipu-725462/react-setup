const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  externals: [nodeExternals()],
  watch: true,
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
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
