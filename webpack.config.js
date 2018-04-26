const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const nested = require("postcss-nested");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const rootDir = path.resolve(__dirname);
const outputPath = path.resolve(rootDir, "build");
const outputPublicPath = "/public/";

const env = process.env.NODE_ENV;

module.exports = {
  watch: env === "develop",
  context: rootDir,

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.js",
  // ファイルの出力設定
  output: {
    path: outputPath,
    filename: "bundle.js",
    publicPath: outputPublicPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  // プラグインの設定
  plugins:
    env === "develop"
      ? [
          new ExtractTextPlugin({
            filename: "../css/sp/[name].css",
          }),
          new StyleLintPlugin(),
          new webpack.LoaderOptionsPlugin({
            options: {
              plugins: [nested(), autoprefixer({ browsers: ["last 2 versions"] })],
            },
          }),
        ]
      : [
          new webpack.optimize.UglifyJsPlugin({
            comments: true,
            compress: {
              warnings: false,
              drop_console: true,
            },
          }),
          new ExtractTextPlugin({
            filename: "../css/sp/[name].css",
          }),
          new StyleLintPlugin(),
          new webpack.LoaderOptionsPlugin({
            options: {
              plugins: [nested(), autoprefixer({ browsers: ["last 2 versions"] })],
            },
          }),
        ],
};
