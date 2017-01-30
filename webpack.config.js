const path = require('path');

module.exports = {
	module: {
		loaders: [
			{
				include: path.join(__dirname, 'example'),
				loader: 'babel-loader',
			},
		],
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
	},
	entry: './example/index.jsx',
	output: {
		path: 'example',
		filename: 'index.js',
	}
};