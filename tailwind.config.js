/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        velmora: {
          50: '#fcfcfc',
          100: '#f8f6f3',
          200: '#e5e2db',
          300: '#d1cdc3',
          400: '#b4afa2',
          500: '#948e7e',
          600: '#736d5e',
          700: '#5a5649',
          800: '#48433a',
          900: '#23211c', // Deep rich black-brown for headings
        },
        gold: {
          muted: '#e6dfd1',
          light: '#d4c5ab',
          DEFAULT: '#b29c73', // Elegant muted gold
          dark: '#8c7a59',
        }
      },
    },
  },
  plugins: [],
}
