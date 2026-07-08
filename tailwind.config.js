/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF5',
        ivory: '#F7F3ED',
        charcoal: '#1A1A1A',
        espresso: '#2C2420',
        stone: '#7A7068',
        gold: '#B8860B',
        'gold-dark': '#96700A',
        'gold-light': '#D4A843',
        sand: '#E8E2DA',
        noir: '#1A1714',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.12em',
        'wide-xl': '0.2em',
      },
    },
  },
  plugins: [],
}
