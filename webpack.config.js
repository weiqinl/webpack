const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist' //此配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
	},
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
