/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0f0f0f',
          charcoal: '#1a1a1a',
          cream: '#f5f0e8',
          gold: '#c9a96e',
          'gold-dark': '#b8944a',
          'gold-light': '#e0cfa0',
          warm: '#f7f3ec',
          muted: '#8c8c8c',
          border: '#e6e1d8',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a96e 0%, #b8944a 100%)',
      }
    },
  },
  plugins: [],
}
