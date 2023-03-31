const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const cssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const BrowserSyncPlugin  =  require ( 'browser-sync-webpack-plugin' );
const path = require('path');

module.exports = {
   entry: './src/scripts/index.js',
   mode: 'development',

   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },

   module: {
      rules: [{
         test: /\.s[ac]ss$/i,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
            {
               loader: "sass-loader",
               options: {
                 sassOptions: {
                   indentWidth: 4,
                   includePaths: ["absolute/path/a", "absolute/path/b"],
                 },
               },
             },
         ]
      },
      {
         test: /\.(woff|woff2|ttf|otf|eot)$/,
         type: 'asset/resource',
         generator: {
           filename: 'fonts/[name][ext]'
         }
       },
       {
         test: /\.(jpe?g|png|gif|svg|ico)$/,
         type: 'asset/resource',
         generator: {
           filename: 'images/[name][ext]'
         }
       },
      ],
   },
   optimization: {
      minimize: true,
      minimizer: [
         new HtmlMinimizerPlugin(),
         new cssMinimizerPlugin(),
         new TerserPlugin(),
      ],
    },

   plugins: [
      new HtmlWebpackPlugin({
         template: 'src/index.html',
     }),
      new miniCss({
         filename: 'css/style.css',
      }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['dist'] }
      }),
   ]
};