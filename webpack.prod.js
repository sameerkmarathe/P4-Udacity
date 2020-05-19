const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [{
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new WorkboxPlugin.GenerateSW(),
        new MiniCssExtractPlugin({ filename: "base.css" }),
        new MiniCssExtractPlugin({ filename: "footer.css" }),
        new MiniCssExtractPlugin({ filename: "form.css" }),
        new MiniCssExtractPlugin({ filename: "header.css" }),
        new MiniCssExtractPlugin({ filename: "resets.css" }),

    ]
}