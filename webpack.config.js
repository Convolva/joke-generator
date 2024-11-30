const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",

  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpg|svg|jpeg|png|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
  {
     apply: (compiler) => {
       compiler.hooks.done.tap('DonePlugin', (stats) => {
         console.log('Compile is done !');
         setTimeout(() => {
           process.exit(0);
         });
       });
     }
  },
    new HTMLWebPackPlugin({
      title: "Joke Generator App",
      filename: "index.html",
      template: "src/template.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
  watch: true, // This is for live watching on the host with live server
};
