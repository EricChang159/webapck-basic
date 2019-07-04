var merge = require('webpack-merge')
var common = require('./webpack.common')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

const terserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglify-js')


module.exports = merge(common, {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, 'dist-pro'),
        filename: '[name].[contenthash:8].js',
        publicPath: './'
    },
    mode: "production",
    optimization: {
        minimizer: [
            new terserPlugin(),
            new OptimizeCssAssetsWebpackPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [

        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
        }),
    ],


    module: {
        rules: [

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[contenthash:8].[ext]'


                }
            },
        ]
    }
})