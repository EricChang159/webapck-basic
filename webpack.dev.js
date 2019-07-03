const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const webpack = require('webpack')


// const project = {
//     name: "app",
//     entry: "path.join(__dirname, './src/main.js')",
//     output: "path.join(__dirname, 'dist')"
//       
// }

module.exports = merge(common, {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }, ]
    },
    // entry: {
    //     app: './dist/index.html'
    // },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../webpack-thelast',
        port: 5000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]

})