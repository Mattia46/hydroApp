const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssMixins = require('postcss-mixins');
const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

module.exports = {
    context: path.resolve(__dirname + '../../../src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            ident: 'postcss',
                            plugins: [
                                postcssImport,
                                postcssMixins,
                                postcssCssNext,
                            ],
                        },
                    },
                ]
            },
        ]
    },


    //sourcemaps
    devtool: 'source-map',
};


