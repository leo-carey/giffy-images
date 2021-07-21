const path = require('path')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: './src/GiffyImages.js'
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'giffy-images.min.js',
        // clean: true
    },
}
