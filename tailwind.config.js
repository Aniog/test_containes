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
        charcoal: '#1C1917',
        gold: '#B8860B',
        'gold-light': '#D4A843',
        stone: '#78716C',
        linen: '#F5F0E8',
        sand: '#E7E0D5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-xl': '0.2em',
      },
    },
  },
  plugins: [],
}
