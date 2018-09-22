const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/index.js',
		vendor: [
			'lodash'
		]},
	devtool: 'inline-source-map',//此选项控制是否生成，以及如何生成 source map。
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'), //此配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
		hot: false, //告诉dev-server 我们在使用 HMR
		publicPath: '/'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),//清理dist文件夹
		new HtmlWebpackPlugin({
			title: 'Caching-weiqinl'
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),// vendor 实例，必须在runtime 实例之前
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		})
		// new webpack.HotModuleReplacementPlugin(), //启用HMR
	],
	output: {
		filename: '[name].[chunkhash].js', // chunkhash:8 表示截取chunkhash生成的前8个字符(默认生成20个字符)
		// chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}
		]
	}
};
