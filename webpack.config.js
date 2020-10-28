const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
},
plugins: [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
  }),
],
resolve: {
  modules: [__dirname, "src", "node_modules"],
  extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
},
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
