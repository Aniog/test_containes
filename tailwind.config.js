/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        ivory: '#F7F3ED',
        charcoal: '#1C1917',
        stone: '#78716C',
        gold: '#B8860B',
        'gold-light': '#D4A843',
        'gold-dark': '#8B6508',
        sand: '#E7E0D6',
        espresso: '#2C2420',
        linen: '#F5F0E8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.12em',
        wide: '0.08em',
      },
    },
  },
  plugins: [],
}
