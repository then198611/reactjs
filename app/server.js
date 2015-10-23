var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevMiddleware = require('webpack-dev-middleware')
var config = require('./webpack.devconfig');

var app = express();

/*app.use(webpackDevMiddleware(webpack(config), {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}))

app.use(express.static(__dirname))
app.listen(8888, function () {
    console.log('Server listening on http://localhost:8888, Ctrl+C to stop')
})*/
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(8888, '127.0.0.1', function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:8888');
    });
