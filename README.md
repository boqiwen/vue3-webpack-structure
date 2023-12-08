开发语言: `Vue3` + `Vuex4` + `Webpack5` + `saas`

### 项目介绍


### webpack 配置
#### 安装 `webpack` `webpack-cli` `webpack-dev-server`
1.  基础配置 mode/entry/output/devServer

2.  配置`loader` js/css/vue
    配置`plugins` `HtmlWebpackPlugin` `MiniCssExtractPlugin` `VueLoaderPlugin`

3.  图片等静态资源处理(不再使用`url-loader` `file-loader` `raw-loader`), 使用webpack5四种新增的内置资源模块 `Asset Modules` 替代了这些loader的功能
    * `asset/resource` 发送一个单独的文件并导出 URL 之前通过使用 `file-loader` 实现
    * `asset/inline` 导出一个资源的 data URI 之前通过使用 `url-loader` 实现
    * `asset/source` 导出资源的源代码 之前通过使用 `raw-loader` 实现
    * `asset` 在导出一个 data URI 和发送一个单独的文件之间自动选择 之前通过使用 `url-loader` 并且配置资源体积限制实现

4.  配置`resolve`
    * 配置 `alias` 路径别名 简化路径长度
    * 配置 `extensions` 简化后缀

5.  其它配置
    output.clean 用于构建时清除dist文件
