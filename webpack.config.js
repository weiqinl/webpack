const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js',
	},
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(['dist']),//清理dist文件夹
		new HtmlWebpackPlugin({
			title: 'Output Management-weiqinl'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
