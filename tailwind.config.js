/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        brand: {
          50: '#fcfaf8',
          100: '#f5efe8',
          200: '#eadcd1',
          300: '#dac3b2',
          400: '#c5a38b',
          500: '#b4886b',
          600: '#a37155',
          700: '#895a45',
          800: '#714b3d',
          900: '#5c3e34',
          950: '#32201b',
        },
      },
    },
  },
  plugins: [],
}
