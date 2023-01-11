/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
        colors:{
      lightred : '#EB455F',
      yellowish: '#FCFFE7',
      lightblue: '#BAD7E9',
      darkblue: '#2B3467'
    },
    screens: {
      'xxs': '200px',
      'xs': '400px',
  },

  },
  plugins: [],
  }
}
