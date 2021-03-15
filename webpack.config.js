const path = require('path');

module.exports = {
  entry: './src/content',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'content.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
