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
//env變數問題
//happypack 將任務分解給多個子程式去併發執行，子程式處理完成後再將結果傳送給主程式
//，因此能實現讓webpack同時處理多個任務，減少構建時間。

//plugin filename template chunks
// entry: {   多個入口的話
//     JS1: "待打包JS-1",
//     JS2: "待打包JS-2"
// }
//webpack-dev-middleware 搭配server.js包，建立外部server檔案
//jsx檔 或是SASS檔test建立，目前只有基本的，外加一個vue環境




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

})