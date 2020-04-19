const webpack = require("webpack");

module.exports = {
  devServer: {
    proxy: {
      "/.netlify": {
        target: "http://localhost:9000",
        pathRewrite: { "^/.netlify/functions": "" }
      }
    }
  },
  productionSourceMap: false,
  pwa: {
    themeColor: "#2a4365",
    msTileColor: "#2a4365"
  },
  configureWebpack: () => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          APPLICATION_VERSION: JSON.stringify(require("./package.json").version)
        })
      ]
    };
  }
};
