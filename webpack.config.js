const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // babel-loader es el que hace la conversion de codigo, pero haciendo uso de los preset que se le seteen
        // en este caso, estan siendo seteados en el archivo de configuracion .babelrc
        use: "babel-loader",
        test: /\.js$/,
      },
    ],
  },
};

module.exports = config;
