const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config')

module.exports = merge(common, {
    mode: 'development',
    entry: './src/GiffyImages.js',

    output: {
        library: "GiffyImages"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                title_lib: `${config.PROJECT_NAME} - Development`,
                src_env: './GiffyImages.js'
            }
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, '../src'),
        compress: false,
        port: 9000,
        hot: true,
        open: true
    }
})