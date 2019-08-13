// var CompressionWebpackPlugin = require('compression-webpack-plugin');
const { NODE_ENV, VUE_APP_ENV } = process.env;
const WebpackZipPlugin = require('webpack-zip-plugin');

let plugins = [];

if (NODE_ENV !== 'development') {
  plugins.push(
    new WebpackZipPlugin({
      initialFile: './dist',
      endPath: './',
      zipName: `pica-cloud-frontend-${VUE_APP_ENV}.zip`
    })
  );
}

module.exports = {
  productionSourceMap: VUE_APP_ENV != 'prod' ? true : false,
  lintOnSave: undefined,
  css: {
    // modules: true,
    loaderOptions: {
      // sass: {
      //   data: '@/src/assets/css/element-variables.scss'
      // }
    }
  },
  // configureWebpack: { plugins },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }));
  }
};
