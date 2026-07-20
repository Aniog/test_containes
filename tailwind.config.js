/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#FAF7F2',
          cream: '#F5F0E8',
          sand: '#E8E2D8',
          gold: '#C5A572',
          'gold-light': '#D4BA8A',
          'gold-dark': '#A8884F',
          charcoal: '#1A1A1A',
          'warm-gray': '#6B6358',
          'soft-gray': '#9A9186',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      }
    },
  },
  plugins: [],
}
