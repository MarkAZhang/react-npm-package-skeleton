var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var DEMO_DIR = path.resolve(__dirname, 'demo/src');

var config = {
  mode: 'production',
  entry: ['babel-polyfill', DEMO_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'demo.js',
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      '~': DEMO_DIR
    }
  },
  module : {
    rules: [
      {
        test : /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react', 'stage-1'],
          plugins: ['react-require', 'lodash'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[local]-[hash:base64:5]!postcss-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [/node_modules/],
      },
      {
        test: /\.(png|svg|eot|woff2?|ttf)/,
        loader: 'url-loader?limit=5000&publicPath=/static/',
      },
    ]
  }
}

module.exports = config
