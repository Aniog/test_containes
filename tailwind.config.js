/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#FAF7F2',
          ivory: '#F5F0E8',
          sand: '#E8DFD0',
          linen: '#D4C9B8',
          bronze: '#B8956A',
          gold: '#C9A96E',
          deep: '#1C1814',
          charcoal: '#2A2520',
          warmgray: '#6B6358',
          lightgray: '#9B9488',
          offwhite: '#FDFCFA',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
    },
  },
  plugins: [],
}
