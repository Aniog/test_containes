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
          base: '#1A1A1A',
          bg: '#F9F7F2',
          gold: '#D4AF37',
          charcoal: '#2D2D2D',
          grey: '#6B6B6B',
          border: '#E5E5E5',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      }
    },
  },
  plugins: [],
}
