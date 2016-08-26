const path = require('path');
const webpack = require('webpack');

const config = {
    // Gives you sourcemaps without slowing down rebundling
    output: {
        // sourcemap support for IntelliJ/Webstorm
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
        devtool: "cheap-module-source-map", // faster than 'source-map'
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    "presets": [
                        "es2015",
                        "react",
                        "stage-0"
                    ]
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: /\.png$/, loader: 'url-loader', query: { mimetype: 'image/png' } },
            { test: /\.jpg$/, loader: 'url-loader', query: { mimetype: 'image/jpg' } },
            { test: /\.gif$/, loader: 'url-loader', query: { mimetype: 'image/gif' } },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
						{ test: /\.json$/, loaders: ['json-loader']}
        ]
    },
		plugins: [
			new webpack.IgnorePlugin(/react-addons/),
			new webpack.IgnorePlugin(/react-dom/),
		],
		externals: {
			'react/addons': true, // important!!
			'react/lib/ExecutionEnvironment': true,
			'react/lib/ReactContext': true
		}
};

module.exports = config;
