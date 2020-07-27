'use strict';
const webpack = require('webpack');
const path = require('path');
const development = 'development';
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : development;
module.exports = {
    context: `${__dirname}/frontend`,
    entry: {
        app: './app'
    },
    mode: NODE_ENV,
    output: {
        publicPath: '/js/',
        path: path.resolve(__dirname, './public/js'),
        filename: '[name].js',
        library: '[name]',
    },
    watch: NODE_ENV === development,
    devtool: 'source-map',
    optimization: {
        // runtimeChunk: {
        //     name: 'common',
        // },
        minimize: true,
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV,
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru|en-gb/)
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /\/node_modules\//,
            options: {
                plugins: ['@babel/plugin-transform-runtime']
            }
        }],
    }
}
