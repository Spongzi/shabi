module.exports = {
    lintOnSave: false,  //加入此行 , false为关闭true为开启  关闭语法检查
    // 开启代理服务器一
    /* devServer: {
        proxy: 'http://localhost:5000'
    } */

    // 开启代理服务器二
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            ws: true, // 用于支持websocket
            changeOrigin: true,
            pathRewrite:{'^/api':''}
          },
          '/foo': {
            target: '<other_url>'
          }
        }
      }
}