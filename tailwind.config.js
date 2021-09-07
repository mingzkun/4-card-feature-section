const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '375px',
      'xl': '1440px'
    },
    colors:{
      red: 'hsl(0, 78%, 62%)',
      cyan: 'hsl(180, 62%, 55%)',
      orange: 'hsl(34, 97%, 64%)',
      blue: 'hsl(212, 86%, 64%)',
      'very-dark-blue': 'hsl(234, 12%, 34%)',
      'grayish-blue': 'hsl(229, 6%, 66%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
      white: colors.white
    },
    fontFamily:{
      sans: ['Poppins', 'sans-serif']
    },
    fontSize: {
      'sm': '13px',
      'base': '15px',
      'lg': '17px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '32px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
