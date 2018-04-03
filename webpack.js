1.初始化创建目录
mkdir webpack-demo && cd webck-demo
npm init -y/*下载json*/
npm install --save-dev webpack /*构建webpack loader*/
/*css npm install --save-dev style-loader css-loader*/
/*创建目录*/
 webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
2:src/index.js
function component() {
  var element = document.createElement('div');
​
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
​
  return element;
}
​
document.body.appendChild(component());
3:index.html
<html>
  <head>
    <title>Getting Started</title>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
4.创建dist  自动生成bundle.js
 webpack-demo
  |- package.json
+ |- /dist
+   |- index.html
- |- index.html
  |- /src
    |- index.js
5: index.js 使用webpack 需要依赖loadsh
npm install --save lodash
6:src/index.js
/*导入import _ from 'lodash'*/
+ import _ from 'lodash';
+
  function component() {
    var element = document.createElement('div');
​
-   // Lodash, currently included via a script, is required for this line to work
+   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
​
    return element;
  }
​
  document.body.appendChild(component());
7:dist/index.html
<html>
   <head>
     <title>Getting Started</title>
-    <script src="https://unpkg.com/lodash@4.16.6"></script>
   </head>
   <body>
-    <script src="./src/index.js"></script>
+    <script src="bundle.js"></script>
   </body>
  </html>
8:解压成webpack打包文件
./node_modules/.bin/webpack src/index.js dist/bundle.js
9.配置webpack.config.js 
/*同级文件*/
const path = require('path');
modules.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bounles.js',
        path: path.resovle(__dirname,'dist');
    }
}
/*接下来解压js文件*/
./node/modules/.bin/webpack --config webpack.config.php
10:解压图片
cnpm install --save-dev file-loader
​
webpack.confg.js
const path = require('path');
modules.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bounles.js',
        path: path.resovle(__dirname,'dist');
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [
               'style-loader',
               'css-loader'
            ]
           },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}
​
11:下载插件
npm install --save-dev html-webpack-plugin  /*覆盖dist/index.js*/
npm install clean-webpack-plugin --save-dev/*清除文件下载*/

/*默认路径*/
const path = require('path');
/*插件html 会帮我们覆盖之前的dist/index.html 文件*/
const HtmlwebpackPlugin = require('html-webpack-plugin');
/*清理管理dist文件夹  删除旧文件*/
const CleanwebpackPlugin = require('clean-webpack-plugin');
​
​
module.exports = {
  entry: {
    /*入口文件*/
    app: './src/index.js',
    print: './src/print.js'
  },
  /*配置文件*/
  plugins: [
    new CleanwebpackPlugin(['dist']),
    new HtmlwebpackPlugin({
      title: 'Output Managment'
    })
  ],
  output: {
    filename: '[name].bounles.js',
    path: path.resolve(__dirname,'dist')
  }
      /*entry: './src/index.js',
    output: {
        filename: 'bounles.js',
        path: path.resolve(__dirname,'dist')
    }
  一个模块
    module: {
        这是一个loader
        rules: [
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
               'file-loader'
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
          },
          {
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
          }
        ]
    }*/
}
/*下载npm install --save-dev html-webpack-plugin*/
npm install clean-webpack-plugin --save-dev/*清除dist文件夹的垃圾文件*/
/*下载服务器 cnpm install --save-dev webpack-dev-server*/
devServer: {contentBase: './dist'}//找到路径
/*开启服务器 "start":"webpack-dev-server --open"*/
​
12:冷热加载
启动const webpack = require('webpack');
​
