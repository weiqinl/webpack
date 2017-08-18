# webpack3.x-demo
webpack3.4.1-demo
webpack3.0 版本 的 demo

## 安装

## 起步 

## 管理资源

## 管理输出

## 开发


## 模块解释
### HtmlWebpackPlugin  
	HtmlWebpackPlugin 自动生成index.html  
### CleanWebpackPlugin  
	CleanWebpackPlugin 清除webpack打包的文件夹  
### CommonsChunkPlugin
	CommonsChunkPlugin可以用于将模块分离到单独的文件中.  
### ProvidePlugin
	ProvidePlugin 可以将模块作为一个变量，被webpack在其他每个模块中引用。只有你需要使用此变量的时候，这个模块才会被 require 进来。


## Q&A
### Q1:关于[chunkhash]不能与HMR同时使用的问题  
	A:在开发环境中，使用HMR来使开发过程更顺畅, 那么就不使用chunkhash, 而是使用hash来替换。  
		在生产环境中，使用chunkhash，不必使用HMR。  
		你也可以使用一个三元运算符来写。filename: `[name]${isDev ? '' : '[chunkhash:8]'}.js`
### Q2: `runtime` bundle会因为当前包含一个新模块的引用，而发生变化。而有时候，引入/删除新模块，并没有引起hash变化。  
A：可能原因，设置了output.chunkFilename: '[name].bundle.js',  

可以提issues:
https://github.com/weiqinl/webpack3.x-demo/issues

http://weiqinl.com