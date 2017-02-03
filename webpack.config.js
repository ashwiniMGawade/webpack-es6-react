const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.jsx'),
    path.resolve(__dirname, 'src/global.js')
  ],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  watch:true,
  resolve: {
    extensions: ['.js', '.jsx', '.es6']
  },
  module: {
    rules: [
      {
          enforce: 'pre',
          test:/\.js$/,
          exclude:/node_modules/,
          loader:'jshint-loader'
      },
      { 
        test: /\.(jsx|es6)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=1',
        query: {
          cacheDirectory: true, 
          presets: ['react', 'es2015'] 
       }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        options: {
            jshint: {
                emitErrors: true,
                failOnHint: true
            }
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:false,
      },
      output: {
        comments:false,
      },
    }),
  ],
  devServer: {
    compress: true,
    port: 9000,
    clientLogLevel: "none", //to disable the log messages
    host:'0.0.0.0', // by default its localhost, one can specify the host address
    hot:true,
    watchContentBase:true, //File changes will trigger a full page reload.,
    //quiet:true, // hide error messages and warnings
  }
};
