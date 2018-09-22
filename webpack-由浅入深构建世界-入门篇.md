webpack是一个强大的构建工具，它能构建前端中的所有对象(ECMAScript、DOM、BOM)。


## 创建项目
>开始之前，请确保安装了 [Node.js](1) 的最新的长期支持版本(LTS - Long Term Support)。目前是 8.12.0 LTS

创建一个目录，初始化`npm`，
```
mkdir webpack4.x && cd webpack-4.x // 创建文件，并切换工作目录至新文件
npm init -y // -y 命令会自动生成一个package.json文件，里面包含了默认配置
```

## webpack安装

然后 在本地安装`webpack`,接着安装`webpack-cli`（此工具用于在命令行中运行webpack，webpack4.x之前没有此工具）。目前`webpack`最新版本`4.19.1`

可以全局安装
```
npm install --global webpack
```
也可以本地安装
```
npm install --save-dev webpack
```
建议本地安装，这可以使我们在引入破坏式变更的依赖时，更容易分别升级项目。

不推荐全局安装，这会将你项目中的 `webpack` 锁定到指定版本，并且在使用不同的 `webpack` 版本的项目中，可能会导致构建失败。

安装cli
```
npm install --save-dev webpack-cli
```

简洁快速的安装命令：
```
npm i webpack webpack-cli -D // 此命令同时执行以上两步的安装
```

## 项目结构
安装完成之后，我们创建了几个文件，现在的目录结构、文件和内容：




[1]:https://nodejs.org/en/