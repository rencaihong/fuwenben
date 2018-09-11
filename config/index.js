'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    // 开发环境
  dev: {
        env: require('./dev.env'),
        port: 8087,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
          '/imgApi':{
            target:'http://www.hangzhouyq.cn/hunt/app',
            changeOrigin:true,
            pathRewrite:{
              '^/imgApi':''
            }
          },
        },
        cssSourceMap: false
    },
//打包环境
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    devtool: '#source-map', 
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
