const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        // babel-loader es el que hace la conversion de codigo, pero haciendo uso de los preset que se le seteen
        // en este caso, estan siendo seteados en el archivo de configuracion .babelrc
        use: "babel-loader",
        test: /\.js$/,
      },
      {
        // cuando hay mas de un loader, se ejecutan respetando el orden y la salida de uno es la entrada del otro
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /\.css$/,
      },
    ],
  },
};

module.exports = config;
