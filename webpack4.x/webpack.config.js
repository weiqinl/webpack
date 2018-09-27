const path = require('path') // nodejs模块，处理文件路径
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清理文件夹

module.exports = {
  entry: { // 入口起点
    index: './src/index.js',
    print: './src/print.js'
  },
  output: { //  出口/输出
    filename: '[name].bundle.js', // 输出文件名称
    path: path.resolve(__dirname, 'dist') // 输出的目录
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpack-Output-Management-weiqinl',
      filename: 'index.html' // 相对于输出目录
    })
  ]
}