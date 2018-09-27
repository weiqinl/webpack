const path = require('path') // nodejs模块，处理文件路径
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清理文件夹
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: { // 入口起点
    app: './src/index.js'
  },
  devtool: 'inline-source-map', // source-map 选项
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: { //  出口/输出
    filename: '[name].bundle.js', // 输出文件名称
    path: path.resolve(__dirname, 'dist'), // 相对publicPath的输出的目录
    publicPath: '/' // 输出的目录
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpack-Output-Management-weiqinl',
      filename: 'index.html' // 相对于输出目录
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}