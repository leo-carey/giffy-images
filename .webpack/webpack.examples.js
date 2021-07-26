var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
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
            template: './src/index.html'
        })
    ]
}