/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        charcoal: '#1A1A1A',
        gold: '#B8860B',
        'gold-light': '#D4A843',
        stone: '#6B6560',
        linen: '#F0EBE3',
        sand: '#E5DFD6',
        espresso: '#2C2420',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.12em',
      },
    },
  },
  plugins: [],
}
