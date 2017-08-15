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


Output Filenames
```
Administrator@liuweiqin MINGW64 /e/project/web/webpack/webpack3.x-demo (test-caching)
$ npm run build

> webpack3.x-demo@0.0.1 build E:\project\web\webpack\webpack3.x-demo
> webpack

clean-webpack-plugin: E:\project\web\webpack\webpack3.x-demo\dist has been removed.
Hash: e9b9ab0a7ad8f83e4c03
Version: webpack 3.5.4
Time: 1217ms
                       Asset       Size  Chunks                    Chunk Names
main.be796062c9ddd8c1b227.js     544 kB       0  [emitted]  [big]  main
                  index.html  210 bytes          [emitted]
   [0] ./src/index.js 236 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
Child html-webpack-plugin for "index.html":
     1 asset
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules

Administrator@liuweiqin MINGW64 /e/project/web/webpack/webpack3.x-demo (test-caching)
$ git status
On branch test-caching
nothing to commit, working tree clean

Administrator@liuweiqin MINGW64 /e/project/web/webpack/webpack3.x-demo (test-caching)
$ npm run build

> webpack3.x-demo@0.0.1 build E:\project\web\webpack\webpack3.x-demo
> webpack

clean-webpack-plugin: E:\project\web\webpack\webpack3.x-demo\dist has been removed.
Hash: e9b9ab0a7ad8f83e4c03
Version: webpack 3.5.4
Time: 1186ms
                       Asset       Size  Chunks                    Chunk Names
main.be796062c9ddd8c1b227.js     544 kB       0  [emitted]  [big]  main
                  index.html  210 bytes          [emitted]
   [0] ./src/index.js 236 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
Child html-webpack-plugin for "index.html":
     1 asset
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules
```


