const path = require("path");
const PATHS = require("./PATHS");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /* 入口文件 */
  entry: "./src/index.js",

  /* 出口文件 */
  output: {
    path: path.resolve(__dirname, PATHS["dist"]),
    filename: "[name].[hash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node-modules|bower_components)/,
        use: { loader: 'babel-loader'  }
      }
    ],
  },
  plugins: [
    // html模块
    new HtmlWebpackPlugin({
      title: 'webpack - excrise', 
      template: path.resolve( PATHS["public"], 'index.html'),
      filename: path.resolve( PATHS["dist"], 'index.html'),
      hash: true,
      minify: {
          removeAttributeQuotes: true,  // 去除多余引号
          collapseWhitespace:true,      // 移除空格
          removeComments:true           // 移除注释
      }
  }),
  ],
};
