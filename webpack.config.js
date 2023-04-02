const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
})
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const cssPlugin = new miniCssExtractPlugin({
    filename: './CSS/[name].css',
});

module.exports = {
    mode: 'development',
    entry: '/index.tsx',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'JS/bundle.js',
        clean: true,
    },
    devtool: 'inline-source-map',
    watchOptions: {
        ignored: /node_modules/,
    },
    //Moduleの設定
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [miniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass'),
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    //webpack-dev-severの設定
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
          },
        open: true,
        port: 3000,
    },
    //htmlPluginの設定
    plugins: [
        htmlPlugin,
        cssPlugin
    ]
}