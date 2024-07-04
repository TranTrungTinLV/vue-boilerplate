/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['OPEN Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brandBlue: {
          1: '#1a73e8'
        },

      },
      boxShadow: {
        blue: '1 1 3px 3px #4285f4'
      }
    }
  },
  plugins: []
}
