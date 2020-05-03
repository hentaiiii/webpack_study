/**
 * webpack的配置文件
 */
const path = require('path')
module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: "style-loader" // 创建一个style标签，将js中的css放入其中
      }, {
        loader: "css-loader" // 将css以CommonJs语法打包到js中
      }, {
        loader: "less-loader" // 将less转换成css
      }]
    }]
  }
}