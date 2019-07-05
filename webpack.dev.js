const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')
//publicPath 重點整理 (debug兩個小時!!) 功用為訪問output訪問檔案的最終路徑，
//所有output檔案路徑加上publicPath就是訪問的最終路徑
//最終路徑意義為其以下以及所在位置平層的檔案都會被訪問
// 如果設置為 output.publicPath = '/static/'
//output.publicPath + 'img/[name].[ext]' = '/static/img/[name].[ext]' (src引用的位置)
//詳情 https://www.qinshenxue.com/article/20170315092242.html
//devServer利用express創建一個區塊，並讀index.html，讀取路徑為devserver的public
//index.html src="/output.publicPath/main.js"
//但是devserver的pathPublic會影響網址 localhost:8080/devPublicPath/
//總之設置一樣比較安全，有事沒事去點點看src有沒有讀的到檔案最實在


module.exports = merge(common, {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist/'

    },
    mode: "development",
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'cache-loader',
                    'thread-loader',
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
        new webpack.NoEmitOnErrorsPlugin(),
    ]

})