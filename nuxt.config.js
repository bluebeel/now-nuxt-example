module.exports = () => {
  const pkg = require('./package');
  return {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
      title: pkg.name,
      meta: [{
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: pkg.description
        }
      ],
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
      color: '#fff'
    },
    /*
     ** Global CSS
     */
    css: [
      '~/assets/css/tailwind.css'
    ],

    modules: [
      '@nuxtjs/sitemap'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    
    sitemap: {
      path: '/sitemap.xml',
    },
    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {
        // Run ESLint on save
        if (ctx.isDev && ctx.isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      },
      filenames: {
        app: '[name].js',
        chunk: '[name].js'
      }
    }
  }
};