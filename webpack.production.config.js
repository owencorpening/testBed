var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: 'bundle.js',
		publicPath: '/'
	},

	entry: [
		'./src/index.jsx' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: '.src/index.html'}
		]),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	]
};
