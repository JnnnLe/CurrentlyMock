const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'Client/dist'); //where bundle will do
const APP_DIR = path.resolve(__dirname, 'Client/src'); //where jsx, where to add new components are added

const config = {
  //starts in entry file
    //anything required in entry file gets added
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;



