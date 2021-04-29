const path = require('path');
const PATHS = require("./PATHS.js")
const webpack = require('webpack');
const {merge} = require('webpack-merge');           // 导入 merge 方法
const commonConfig = require('./webpack.common')    // 导入公共config
const NODE_ENV =  process.env.NODE_ENV

// 注意webpack webpack-cli webpack-dev-server  版本匹配
/** @type {devServer}
 *  webpack-dev-server 可用于快速开发应用程序。
 */
const devServer = {
  contentBase: path.resolve(PATHS.dist),
  compress:true,
  historyApiFallback:true,
  host:'127.0.0.1',
  port: 8080,
  inline: true,
  open:true,
  hot:true,
}

// devtool 不能直接放在 devConfig里面
/**
 * 此选项控制是否生成，以及如何生成 source map
*/
commonConfig.devtool = NODE_ENV === 'development' ? false :'cheap-module-eval-source-map'

const devConfig = {
  // 模式
  mode: 'development',
  // 本地服务
  devServer,
  // source-map
  // devtool:'cheap-module-eval-source-map',
  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
module.exports = merge(commonConfig, devConfig) 
