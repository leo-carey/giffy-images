const path = require('path')
const mode = process.env.ENV === 'production' ? 'production' : 'development'

module.exports = {
    mode: mode,
    entry: './src/GiffyImages.js',
    output: {
        filename: 'giffy-image.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    }
};
