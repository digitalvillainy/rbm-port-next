const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': '#7E8D8D',
        'primary-darker': '#617374',
        'primary-lighter': '#DFE0E0',
        'rbm-red': '#AA0000',
        'rbm-yellow': '#FFCC00'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
