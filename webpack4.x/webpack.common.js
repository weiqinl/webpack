const path = require('path') // nodejs模块，处理文件路径
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清理文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html
const webpack = require('webpack')

module.exports = {
  entry: { // 入口起点
    index: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpack--Caching-weiqinl',
      filename: 'index.html' // 相对于输出目录
    })
  ],
  output: { //  出口/输出
    filename: '[name].[contenthash].js', // 每个输出bundle文件名称(包含入口起点、代码拆分或各种插件创建的多个bundle)
    chunkFilename: '[name].bundle.js', // 按需加载的chunk的输出文件名称
    path: path.resolve(__dirname, 'dist'), // 相对publicPath的输出的目录
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}