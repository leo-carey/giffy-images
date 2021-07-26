var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

console.log(process.env.PROJECT_NAME)

module.exports = {
    mode: 'development',
    entry: './src/GiffyImages.js',

    output: {
        library: "GiffyImages"
    },

    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                title_lib: process.env.PROJECT_NAME
            }
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, '../src'),
        compress: false,
        port: 9000,
    }
};
