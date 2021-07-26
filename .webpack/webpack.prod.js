const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/GiffyImages.js',

  output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'giffy-images.min.js',
      clean: true,
      library: "GiffyImages"
  }
})
