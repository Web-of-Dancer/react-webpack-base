const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = require('./get-entry')('./src/pages');

module.exports = {
  entry: entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
        ]
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000, // 图片转Base64大小限制
              outputPath: 'images',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '主页',
      filename: 'index.html',
      template: './src/template/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: '关于我们',
      filename: 'about.html',
      template: './src/template/index.html',
      chunks: ['about'],
    }),
  ],
  devServer: {
    publicPath: '/',
    // 设置服务器访问的基本目录
    contentBase: path.resolve(__dirname,'dist'), //最好设置成绝对路径
    // 启动的服务端口
    port: 3333,
    //热加载
    hot: true,
    // 设置自动拉起浏览器
    open: true
  }
}