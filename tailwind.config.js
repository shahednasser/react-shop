const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        red: colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
