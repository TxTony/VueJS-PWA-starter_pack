'use strict'

//const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var projectRoot = path.resolve(__dirname, '../')
var env = process.env.NODE_ENV || "development"

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
      mode:env,
      resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue',
          'src': path.resolve(__dirname, '../src'),
          'assets': path.resolve(__dirname, '../src/assets'),
          'static': path.resolve(__dirname, '../static'),
          'components': path.resolve(__dirname, '../src/components'),
          'root': path.resolve(__dirname, '../'),
          'base': path.resolve(__dirname, '/')
        },
        modules: [ path.join(__dirname, '../node_modules') ]
      },
    entry: {
        app: path.join(__dirname, '../src', 'main.js')
    },

    output: {
        path: config.build.assetsRoot,
        publicPath: env === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js',
        sourceMapFilename: "[file].map"
    },
  optimization: {
    splitChunks: {
      // Must be specified for HtmlWebpackPlugin to work correctly.
      // See: https://github.com/jantimon/html-webpack-plugin/issues/882
      chunks: 'all',
    }
  },
  stats: { children: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
        {
          test: /\.styl(us)?$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'stylus-loader'
          ]
        },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: 'file-loader'
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          }, 
            'sass-loader']
      },
      {
        test: /\.css$/,
        use:  [  'style-loader', 'css-loader']
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          limit: 10000
        }
      }
    ]
  },
  
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin('dist', {} ),
        new MiniCssExtractPlugin({
          filename: 'style.[contenthash].css',
        }),
        new WebpackMd5Hash()
    ]

};