const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config')

module.exports = merge(common, {
    mode: 'development',
    entry: './src/GiffyImages.js',

    output: {
        path: path.resolve(__dirname, '../examples'),
        filename: 'giffy-images.min.js',
        clean: true,
        library: "GiffyImages"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                title_lib: `${config.PROJECT_NAME} - Examples`,
                src_env: '../dist/giffy-images.min.js'
            }
        })
    ]
})
