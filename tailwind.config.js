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
        'gold-light': '#D4A843',
        'gold-dark': '#8B6508',
        sand: '#E7E0D6',
        espresso: '#292524',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
