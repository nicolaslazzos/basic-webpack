const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: 'build/'
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
        // cuando hay mas de un loader, se ejecutan respetando el orden (der a izq) y la salida de uno es la entrada del otro
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /\.css$/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        // image-webpack-loader le hace un resize a la imagen
        // url-loader se fija el tamaño, si la imagen es menor al limite, la incluye en el bundle, sino la incluye en el directorio de salida
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 },
          },
          "image-webpack-loader",
        ],
      },
    ],
  },
};

module.exports = config;
