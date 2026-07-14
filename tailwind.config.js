/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFBF7',
        cream: '#F7F3ED',
        charcoal: '#1C1917',
        stone: '#78716C',
        gold: '#B8860B',
        'gold-dark': '#96700A',
        'gold-light': '#D4A843',
        sand: '#E7E0D6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.12em',
      },
    },
  },
  plugins: [],
}
