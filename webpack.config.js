const path = require('path');


  module.exports = [{
  entry: './dist/randomness.js',
  mode: 'development',
  output: {
    filename: 'randomness.js',
    path: path.resolve(__dirname, 'prod')
  }
},
{
  entry: './dist/sine.js',
  mode: 'development',
  output: {
    filename: 'sine.js',
    path: path.resolve(__dirname, 'prod')
  }
},
{
  entry: './dist/polar.js',
  mode: 'development',
  output: {
    filename: 'polar.js',
    path: path.resolve(__dirname, 'prod')
  }
},
{
  entry: './dist/radar.js',
  mode: 'development',
  output: {
    filename: 'radar.js',
    path: path.resolve(__dirname, 'prod')
  }
},
{
  entry: './dist/histogram.js',
  mode: 'development',
  output: {
    filename: 'histogram.js',
    path: path.resolve(__dirname, 'prod')
  }
}
];
