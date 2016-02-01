var webpack = require('webpack');
var path = require('path');

var getEntry = function(env) {
  var entry = [];
  if (env=='development') {
    // hot reloading only in dev
    entry.push('webpack-hot-middleware/client');
  }
  entry.push('./src/index');
  return entry;
}

var getLoaders = function () {
  return [
    {
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loaders: ['babel', 'eslint']
    },
    {
      test: /(\.css|\.scss)$/,
      include: path.join(__dirname, 'src'),
      loaders: ['style', 'css?sourceMap', 'sass?sourcMap']
    }
  ]
};

module.exports = function getConfig(env) {
  env = "development"
  return {
    debug: true,
    devtool: env == 'production' ? 'source-map' : 'cheap-module-eval-source-map',
    entry: getEntry(env),
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: getLoaders()
    }
  };
};
