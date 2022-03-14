const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const webpackPlugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
    filename: 'index.html',
  }),
  new Dotenv({
    path: './.env', // Path to .env file (this is the default)
    systemvars: true,
  }),
  new CopyPlugin({
    patterns: [
      { from: 'public/3DAssets', to: '3DAssets' },
      { from: 'public/fonts', to: 'fonts' },
      { from: 'public/Assets', to: 'Assets' },
      { from: 'public/clientes', to: 'clientes' },
      { from: 'public/devs', to: 'devs' },
      { from: 'public/icons', to: 'icons' },
      { from: 'public/viewicons', to: 'viewicons' },
      { from: 'public/favicon.ico', to: '' },
      { from: 'public/manifest.json', to: '' },
      { from: 'public/robots.txt', to: '' },
      { from: 'public/sitemap.xml', to: '' }
    ],
  }),
];

if ('production' === process.env.NODE_ENV) {
  webpackPlugins.push(new InjectManifest({
    swSrc: './src/src-sw.js',
    swDest: 'sw.js',
  }));
}

module.exports = {
  context: __dirname,
  // entry: './src/index.js',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: 'assets/img/[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: webpackPlugins,
};

