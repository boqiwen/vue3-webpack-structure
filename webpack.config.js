const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

module.exports = {  
  mode: 'development',

  // 入口
  entry: './src/index.js',

  // 出口
  output: {
    // 输出路径
    path: path.resolve(__dirname, 'dist'),
    // 输出名称
    filename: '[name].js',
    // 资源输出
    // assetModuleFilename: 'asset/[name].[contenthash:8][ext][query]',
    clean: true
  },

  devServer: {
    host: '0.0.0.0', // 指定启动路径 0.0.0.0 可以被外部访问
    port: 8889, // 指定端口号
    hot: true // 热更新
  },

  devtool: 'source-map',

  // 模块处理
  module: {
    // 处理规则定义
    rules: [
      {
        // .js配置
        test: /\.js$/,
        // 排除 node_modules
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset',
        // 设置文件路径
        generator: {
          filename: "assets/images/[hash][ext][query]"
        },
        parser: {
          // 可以根据指定的图片大小来判断是否需要将图片转化为 base64 100 * 1024为100KB
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      }
    ]
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@images": path.resolve(__dirname, './src/assets/images')
    },
    extensions: [".js", '.vue']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),

    // vue-loader必备plugin
    new VueLoaderPlugin(),

    // 使用 MiniCssExtractPlugin 插件将css抽离出来成为一个文件 在html中使用link来引入
    new MiniCssExtractPlugin({
      filename: "assets/styles/[contenthash].css"
    }),

    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ]
}