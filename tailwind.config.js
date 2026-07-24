/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#C9A96E',
          'gold-light': '#E2C992',
          'gold-dark': '#A6843C',
          cream: '#F7F4EF',
          'warm-white': '#FAF8F5',
          charcoal: '#2C2A26',
          'warm-gray': '#8C857B',
          'soft-black': '#1A1816',
        }
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
