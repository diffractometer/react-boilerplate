var webpack = require('webpack');

var getEntry = function(env) {
  var entry = [];
  if (env=='development') {
    // hot reloading only in dev
    entry.push('webpack-hot-middleware/client');
  }
  entry.push('./entry.js');
  return entry;
}

// webpack ./entry.js bundle.js --module-bind 'css=style!css'
module.exports = {
    entry: getEntry("development"),
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
