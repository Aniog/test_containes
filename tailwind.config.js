/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b1bbc8',
          400: '#8797a9',
          500: '#687b90',
          600: '#536278',
          700: '#444f62',
          800: '#3a4453',
          900: '#2d3541',
          950: '#1a1e26',
        },
        gold: {
          50: '#fbf8ed',
          100: '#f5eed0',
          200: '#eadb9f',
          300: '#dfc36a',
          400: '#d4ac44',
          500: '#c59432',
          600: '#aa7527',
          700: '#885922',
          800: '#714922',
          900: '#613e21',
          950: '#381f10',
        },
      },
    },
  },
  plugins: [],
}
