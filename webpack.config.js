const webpack = require('webpack');
module.exports = {
  entry: './src/index.jsx',

  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=1' }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:false,
      },
      output: {
        comments:false,
      },
    }),
  ]
};
