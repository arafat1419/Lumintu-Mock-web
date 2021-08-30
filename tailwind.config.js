module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Roboto', 'sans',]
      },
      colors: {
        'footer': '#25648E',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
