const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'

const resolveUrl = filePath => resolve(__dirname, filePath)

module.exports = {
  pages: {
    index: {
      entry: resolveUrl('site/main.ts'),
      template: resolveUrl('public/index.html'),
      filename: 'index.html',
      title: 'hale UI--',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@site', resolveUrl('site'))
      .set('hale-ui', resolveUrl('package'))
    
    //
    // https://github.com/peerigon/markdown-loader
    // config.module.rule('md')
    //   .test(/\.md/)
    //   .use('html-loader')
    //     .loader('html-loader')
    //     .end()
    //   .use('markdown-loader')
    //     .loader('markdown-loader')
    //     .end()
  },
  configureWebpack: () => {
    return {
      externals: isDevelopment ?
        {}
          : 
        {
          vue: 'Vue',
          'vue-router': 'VueRouter'
        },
      plugins: isDevelopment ?
        []
          :
        [
          new CopyWebpackPlugin([
            { from: 'node_modules/vue/dist/vue.min.js',
              to: 'CDN/js'
            },
            {
              from: 'node_modules/vue-router/dist/vue-router.min.js',
              to: 'CDN/js'
            }
          ])
        ],
    }
  }
}
