module.exports = {
  mode: 'production',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
};
