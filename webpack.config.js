/*jshint esversion: 6 */

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: './src/index.ts',
    main: './src/main.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".css", ".less", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { /* Loader options go here */
          failOnHint: false
        },
        exclude: /^(?!.*\.spec\.ts$).*\.ts$/
      },
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },

      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },

      { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
          tslint: {
              //emitErrors: true,
              failOnHint: false
          }
      }
  })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};