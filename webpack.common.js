const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
const path = require('path')
var smp = new SpeedMeasurePlugin()

//之後有機會的話 可以用這邊的變數
// project = {
//     name: 'webpack-Basic-setting',
//     entry: './src/main.js',
//     output: {
//         path: './dist',
//         filename: '[name].[hash:8].js',
//         publicPath: '/'
//     },
//     publicPath: './',
//     filename: '[name].[hash:8]',
//     isVue: true
// }




module.exports = smp.wrap({
    plugins: [
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'cache-loader',
                    'thread-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        },
                        // include: [resolve('src'), resolve('test')]
                    }
                ]

            },
            {
                test: /\.vue$/,
                use: [
                    'cache-loader',
                    'thread-loader',
                    'vue-loader'
                ],
                // options: {
                //     loaders: {}
                // }
            },


        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
})