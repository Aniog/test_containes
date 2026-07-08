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
        charcoal: '#1C1917',
        'warm-gold': '#B8860B',
        'warm-gold-light': '#D4A843',
        taupe: '#8B7D6B',
        sand: '#F0EBE3',
        ivory: '#FFFDF8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
      },
    },
  },
  plugins: [],
}
