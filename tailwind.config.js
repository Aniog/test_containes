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
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#FDFBF9',
          100: '#F6F3EE',
          200: '#E8DFD1',
          300: '#D5C4AB',
          400: '#BFA27E',
          500: '#A98155',
          600: '#946640',
          700: '#754B31',
          800: '#613E2C',
          900: '#3D261A', // Base deep color
        },
        accent: {
          light: '#dfc4a2',
          DEFAULT: '#c29d6d',
          dark: '#a17d4d',
        }
      }
    },
  },
  plugins: [],
}
