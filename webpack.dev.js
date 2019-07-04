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
    mode: "development",
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: './'
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
            },
            {

                test: /\.html$/,
                loader: 'html-loader'

            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name]-pack.[ext]'

                }
            },
        ]
    },
    // entry: {
    //     app: './dist/index.html'
    // },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
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