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
    themeColor: "#3c366b",
    msTileColor: "#3c366b",
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/],
    }
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
