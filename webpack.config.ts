import * as path from "path";
import * as webpack from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "production",
  entry: "./foo.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js",
  },
};

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  //...
};

export default config;
