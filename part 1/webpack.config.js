'use strict';
const webpack = require('webpack');
const path = require('path');
const development = 'development';
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : development;
module.exports = {
    context: `${__dirname}/frontend`,
    entry: {
        home: './home',
        about: './about',
        common: './common',
    },
    mode: NODE_ENV,
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].js',
        library: '[name]',
    },
    watch: NODE_ENV === development,
    devtool: 'source-map',
    optimization: {
        runtimeChunk: {
            name: 'common',
        },
        minimize: true,
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV,
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                plugins: ['@babel/plugin-transform-runtime']
            }
        }]
    }
}
