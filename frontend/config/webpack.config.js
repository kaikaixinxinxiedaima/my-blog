const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    // 配置入口文件
    main: path.resolve(__dirname, "../src/main.js"),
  },
  output: {
    // 配置打包文件输出目录
    path: path.resolve(__dirname, "../dist"),
    // 生成的 js 文件名称
    filename: "js/[name].[hash:8].js",
    // 生成的 chunk 名称
    chunkFilename: "js/[name].[hash:8].js",
    // 资源引用的路径
    publicPath: "/",
  },
  devServer: {
    hot: true,
    port: 3000,
    contentBase: path.resolve(__dirname, "../dist"),
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        loader: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              configFile: "./babel.config.js",
            },
          },
        ],
        exclude: /node_modules/,
        include: [/src/],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: [path.join(__dirname, "./src")],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "img/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "media/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "fonts/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
