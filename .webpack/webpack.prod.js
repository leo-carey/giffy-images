const path = require('path')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/GiffyImages.js',

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'giffy-images.min.js',
        clean: true,
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
    }
}
