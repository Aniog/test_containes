/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        charcoal: '#1A1A1A',
        gold: '#C4A265',
        'gold-dark': '#A8894F',
        taupe: '#8B7E74',
        sand: '#F0EBE3',
        stone: '#D4CCC4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
      },
    },
  },
  plugins: [],
}
