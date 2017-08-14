# webpack3.x-demo
webpack3.4.1-demo
webpack3.0 版本 的 demo

一步步告诉你，每个模版的功能点  


## 模块解释
### HtmlWebpackPlugin  
	HtmlWebpackPlugin 自动生成index.html  
### CleanWebpackPlugin  
	CleanWebpackPlugin 清除webpack打包的文件夹  
### CommonsChunkPlugin
	CommonsChunkPlugin可以用于将模块分离到单独的文件中.  
### 


## Q&A
1:Q:关于[chunkhash]不能与HMR同时使用的问题  
	A:在开发环境中，使用HMR来使开发过程更顺畅, 那么就不使用chunkhash, 而是使用hash来替换。  
		在生产环境中，使用chunkhash，不必使用HMR。  
		你也可以使用一个三元运算符来写。filename: `[name]${isDev ? '' : '[chunkhash:8]'}.js`


可以提issues:
https://github.com/weiqinl/webpack3.x-demo/issues

http://weiqinl.com