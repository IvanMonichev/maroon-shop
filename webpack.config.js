const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'inline-source-map',
    // devtool: 'source-map',
    stats: 'minimal',

    entry: {
      index: 'src/views/index.pug',
      card: 'src/views/pages/card.pug',
      catalog: 'src/views/pages/catalog.pug',
    },

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: 'auto',
      // output filename of scripts
      filename: 'scripts/[name].[contenthash:8].js',
      chunkFilename: 'scripts/[name].[id].js',
      clean: true,
    },

    resolve: {
      alias: {
        Views: path.join(__dirname, 'src/views/'),
        Images: path.join(__dirname, 'src/images/'),
        Fonts: path.join(__dirname, 'src/fonts/'),
        Styles: path.join(__dirname, 'src/styles/'),
        Scripts: path.join(__dirname, 'src/scripts/'),
      },
    },

    plugins: [
      // enable processing of Pug files from entry
      new PugPlugin({
        // verbose: !isProd, // output information about the process to console
        pretty: !isProd, // formatting of HTML
        extractCss: {
          // output filename of styles
          filename: '/css/[name].[contenthash:8].css',
        },
      }),
    ],

    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: PugPlugin.loader,
          options: {
            // enable filters only those used in pug
            embedFilters: {
              // :escape
              escape: true,
              // :code
              code: {
                className: 'language-',
              },
              // :highlight
              highlight: {
                verbose: !isProd,
                use: 'prismjs', // name of a highlighting npm package, must be extra installed
              },
            },
          },
        },

        // styles
        {
          test: /\.(css|sass|scss)$/,
          use: ['css-loader', 'sass-loader'],
        },

        // fonts
        {
          test: /\.(woff2?|ttf|otf|eot|svg)$/,
          type: 'asset/resource',
          include: /assets[\\/]fonts/, // fonts from `assets/fonts` directory only, match posix and win paths
          generator: {
            // output filename of fonts
            filename: 'assets/fonts/[name][ext][query]',
          },
        },

        // images
        {
          test: /\.(png|svg|jpe?g|webp)$/i,
          resourceQuery: { not: [/inline/] }, // ignore images with `?inline` query
          type: 'asset/resource',
          include: /assets[\\/]images/, // images from `assets/images` directory only, match posix and win paths
          generator: {
            // output filename of images
            filename: 'assets/img/[name].[hash:8][ext]',
          },
        },

        // inline images: png or svg icons with size < 4 KB
        {
          test: /\.(png|svg)$/i,
          type: 'asset',
          include: /assets[\\/]images/,
          exclude: /favicon/, // don't inline favicon
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024,
            },
          },
        },

        // force inline svg file containing `?inline` query
        {
          test: /\.(svg)$/i,
          resourceQuery: /inline/,
          type: 'asset/inline',
        },
      ],
    },

    performance: {
      hints: isProd ? 'error' : 'warning',
      // in development mode the size of assets is bigger than in production
      maxEntrypointSize: isProd ? 1024000 : 4096000,
      maxAssetSize: isProd ? 1024000 : 4096000,
    },

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 4000,
      open: true, // open in default browser
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true,
        },
      },
    },
  };
};