const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const outputPath = resolve(__dirname, 'dist')

module.exports = env => ({
  mode: env.mode,
  devtool: 'inline-source-map',
  output: {
    path: outputPath,
    // publicPath: '/',
    filename: 'bundle.js',
  },
  entry: resolve(__dirname, 'src/index.js'),

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || env.mode),
      },
    }),
  ],
})
