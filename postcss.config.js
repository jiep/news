const { ALLOWED_COUNTRIES } = require('./src-functions/allowed_countries.js');

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./src/**/*.vue", "./public/index.html"],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        whitelist: ["spinner", "flag-icon", ...ALLOWED_COUNTRIES.map(x => `flag-icon-${x}`)]
      })
  ]
};
