/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F7F3EE',
        cream: '#FDFAF7',
        espresso: '#2C1E14',
        'espresso-light': '#3E2E22',
        gold: '#C8A46E',
        'gold-hover': '#B5935E',
        'gold-muted': '#D4B896',
        stone: '#7A6B5D',
        'stone-light': '#A89888',
        border: '#E2D8CE',
        'border-dark': '#CFC3B5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
