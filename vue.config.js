const path = require('path')

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.paperplane.cc/paperplane-kiny/'
      : undefined,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/vars.less')],
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, './src/assets/img'),
        '@css': path.resolve(__dirname, './src/assets/css'),
      },
    },
  },
}
