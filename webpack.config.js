const path = require('path')
const webpack = require('webpack')

module.exports = {
    // entry: path.resolve(__dirname, 'src') + '/app/index.js',
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js',
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-0'],
                },
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader?limit=100000',
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': "jquery'",
            'window.$': 'jquery',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8600,
        open: true,
    },
}