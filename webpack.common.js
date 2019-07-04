const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const path = require('path')

module.exports = {
    // entry: path.join(__dirname, './src/main.js'),
    // output: {
    //     path: path.join(__dirname, 'dist-pro'),
    //     filename: '[name].[hash:8].js',
    //     publicPath: '/'
    // },
    mode: 'none',
    plugins: [
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },


        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}