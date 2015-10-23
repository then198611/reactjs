var webpack = require('webpack');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    mangle: {
        except: ['$', 'exports', 'require']
    },
    compress: {
        warnings: false
    }
});

module.exports = {
    entry: {
        main : './app/main'
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader?sourceMap'}
        ]
    },
    plugins: [
        uglifyJsPlugin,
    ]
}
