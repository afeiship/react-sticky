const webpack = require('webpack')
const base = require('./webpack.base.conf')
const config = require('../config')

base.entry = {
  lib: './src/main.js'
}

base.output = {
  path: config.build.assetsRoot,
  publicPath: config.build.assetsPublicPath,
  filename: 'react-sticky.js',
  library: 'ReactSticky',
  libraryTarget: 'umd'
}

var webpackConfig = Object.assign({}, base)

webpackConfig.devtool = '#source-map'
webpackConfig.plugins = (webpackConfig.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
])

module.exports = webpackConfig
