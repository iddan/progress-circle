module.exports = {
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  entry: './index.jsx',
  output: {
    filename: 'index.js',
  },
};
