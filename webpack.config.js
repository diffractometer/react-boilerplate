var webpack = require('webpack');
var path = require('path');

var getPlugins = function(env) {
  var GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env == 'development'
  };

  var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS) //Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
  ];

  switch(env) {
    case 'production':
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}));
      break;
    case 'development':
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NoErrorsPlugin());
      break;
  }

  return plugins;
};

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
  return {
    debug: true,
    devtool: env == 'production' ? 'source-map' : 'cheap-module-eval-source-map',
    entry: getEntry(env),
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: "bundle.js"
    },
    plugins: getPlugins(env),
    module: {
      loaders: getLoaders()
    }
  };
};
