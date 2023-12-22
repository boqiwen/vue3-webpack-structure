开发语言: `Vue3` + `Vue-router4` + `Vuex4` + `Webpack5` + `saas`

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
    * output.clean 用于构建时清除dist文件
    * __VUE_OPTIONS_API__：这个标志是用来对 Vue2 做适配的，但在 Vue3 中，Options API 写得相对来说就比较少了。而默认情况下，这个 __VUE_OPTIONS_API__ 标志默认值是 true，这就意味着默认情况下 Vue3 项目中会包含支持 Options API 的这部分代码。所以这里我们对这个标志配置成 false，以便在最终构建时获得正确的tree-shaking
    * __VUE_PROD_DEVTOOLS__：这个标志是用来设置在生产环境下要不要对 devtools（Vue Devtools）做支持。通常，调试工具只在开发阶段使用，生产阶段一般是不需要的，所以我们可以将这个标志设置为默认值 false
