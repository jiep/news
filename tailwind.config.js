module.exports = {
  theme: {
    spinner: theme => ({
      default: {
        color: theme("colors.blue.900"), // color you want to make the spinner
        size: "5em", // size of the spinner (used for both width and height)
        border: "3px", // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: "500ms" // the speed at which the spinner should rotate
      }
    })
  },
  variants: {
    spinner: ["responsive"]
  },
  plugins: [
    require("tailwindcss-spinner")(),
    require("@tailwindcss/custom-forms")
  ]
};
