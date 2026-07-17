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
        charcoal: '#1A1A1A',
        gold: '#B8860B',
        'gold-light': '#D4A843',
        taupe: '#8B7D6B',
        linen: '#F5F0E8',
        sand: '#E8E0D4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'cta': '0.2em',
      },
    },
  },
  plugins: [],
}
