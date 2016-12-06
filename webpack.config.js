// var webpack = require('webpack');
// var path = require('path');

// const config = {
//   entry: './Client/app.jsx',
//   output: {
//     path: __dirname + '/build',
//     filename: 'bundle.js'
//   },
//   loaders: [
//   	{
//       test: /\.js?x$/, //only test .js with the option of .jsx
//       exclude: /(node_modules|bower_components)/,
//       loader: 'babel-loader',
//       query: {
//         presets: ['es2015']
//       }
// 	  }
//   ]
// };

// module.exports = config;


var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'Client/dist'); //where bundle will do
var APP_DIR = path.resolve(__dirname, 'Client/src'); //where jsx, where to add new components are added

var config = {
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



