module.exports = {      
    devServer: {
      disableHostCheck: true
    },
        //修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
        chainWebpack: (config) => {
          config
              .plugin('html')
              .tap((args) => {
                  args[0].title = '鸱吻云平台';
                  return args;
              });
      }
}
