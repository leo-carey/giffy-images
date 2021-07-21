const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/GiffyImages.js',

    devServer: {
        contentBase: path.join(__dirname, '../src'),
        compress: false,
        port: 9000,
    }
};
