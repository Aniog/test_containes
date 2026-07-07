/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif', 'Playfair Display'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      colors: {
        velmora: {
          gold: '#C5A059',
          parchment: '#F9F7F2',
          charcoal: '#1A1A1A',
        }
      }
    },
  },
  plugins: [],
}
