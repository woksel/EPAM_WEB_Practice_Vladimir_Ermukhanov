import Html from "html-webpack-plugin";
import Clean from "clean-webpack-plugin";
import path from "path";

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "src",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new Html({
      template: "index.html",
    }),
    new Clean(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        //use: ["css-loader", "style-loader"],
        use: ["style-loader"],
      },
    ],
  },
};
