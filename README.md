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


## Output Filenames
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


## 提取模版[Extracting Boilerplate]

```
Administrator@liuweiqin MINGW64 /e/project/web/webpack/webpack3.x-demo (test-caching)
$ npm run build

> webpack3.x-demo@0.0.1 build E:\project\web\webpack\webpack3.x-demo
> webpack

clean-webpack-plugin: E:\project\web\webpack\webpack3.x-demo\dist has been removed.
Hash: 18fee412ab73bda2c2bf
Version: webpack 3.5.4
Time: 1248ms
                          Asset       Size  Chunks                    Chunk Names
   main.10d41db9ba4d8fdd23af.js     542 kB       0  [emitted]  [big]  main
runtime.0165e4f82c498af2fe87.js    5.82 kB       1  [emitted]         runtime
                     index.html  288 bytes          [emitted]
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
$ npm run build

> webpack3.x-demo@0.0.1 build E:\project\web\webpack\webpack3.x-demo
> webpack

clean-webpack-plugin: E:\project\web\webpack\webpack3.x-demo\dist has been removed.
Hash: 8203443e0e87ced468d3
Version: webpack 3.5.4
Time: 1329ms
                          Asset       Size  Chunks                    Chunk Names
 vendor.8196d409d2f988123318.js     541 kB       0  [emitted]  [big]  vendor
   main.56a95c6c54f6691e32c9.js  691 bytes       1  [emitted]         main
runtime.c4aa82d808b35a81a522.js    5.85 kB       2  [emitted]         runtime
                     index.html  365 bytes          [emitted]
   [1] ./src/index.js 236 bytes {1} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
   [4] multi lodash 28 bytes {0} [built]
    + 1 hidden module
Child html-webpack-plugin for "index.html":
     1 asset
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules
```
### 模块标识符[Module Identifiers]

```
Administrator@liuweiqin MINGW64 /e/project/web/webpack/webpack3.x-demo (test-caching)
$ npm run build

> webpack3.x-demo@0.0.1 build E:\project\web\webpack\webpack3.x-demo
> webpack

clean-webpack-plugin: E:\project\web\webpack\webpack3.x-demo\dist has been removed.
Hash: 6498143da7fe96e5c469
Version: webpack 3.5.4
Time: 1238ms
                          Asset       Size  Chunks                    Chunk Names
 vendor.a7561fb0e9a071baadb9.js     541 kB       0  [emitted]  [big]  vendor
   main.b80ddbf3805c0fb71cbb.js    1.13 kB       1  [emitted]         main
runtime.342e7d5c587248f314c4.js    5.85 kB       2  [emitted]         runtime
                     index.html  365 bytes          [emitted]
   [1] ./src/index.js 327 bytes {1} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
   [4] ./src/print.js 61 bytes {1} [built]
   [5] multi lodash 28 bytes {0} [built]
    + 1 hidden module
Child html-webpack-plugin for "index.html":
     1 asset
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules

```

……我们可以看到这三个文件的 hash 都变化了。这是因为每个 module.id 会基于默认的解析顺序(resolve order)进行增量。也就是说，当解析顺序发生变化，ID 也会随之改变。因此，简要概括：
main bundle 会随着自身的新增内容的修改，而发生变化。
vendor bundle 会随着自身的 module.id 的修改，而发生变化。
runtime bundle 会因为当前包含一个新模块的引用，而发生变化。