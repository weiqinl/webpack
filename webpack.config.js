const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new CleanWebpackPlugin(['dist']),//清理dist文件夹
		new HtmlWebpackPlugin({
			title: 'Caching-test-weiqinl'
		})
	],
	output: {
		filename: '[name].[chunkhash].js', // chunkhash:8 表示截取chunkhash生成的前8个字符(默认生成20个字符)
		path: path.resolve(__dirname, 'dist')
	}
};
