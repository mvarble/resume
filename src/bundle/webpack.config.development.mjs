import HtmlWebpackPlugin from 'html-webpack-plugin'
import { merge } from 'webpack-merge';

import webpackConfig from './webpack.config.mjs';

export default merge(webpackConfig, {
  entry: './src/bundle/development-entry.js',
  output: {
    filename: 'bundle.js',
  },
  target: 'web',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({ title: "Matthew Varble's Resume" }), 
  ],
});
