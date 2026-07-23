/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#faf7f2',
          100: '#f5f0e8',
          200: '#e7e0d5',
          300: '#d6cdc0',
          400: '#b8aea0',
          500: '#9c9285',
          600: '#7a7268',
          700: '#5c554d',
          800: '#3d3833',
          900: '#1c1917',
        },
        gold: {
          50: '#fdf8f0',
          100: '#f9efd8',
          200: '#f2dcb0',
          300: '#e8c680',
          400: '#d4a853',
          500: '#c9a96e',
          600: '#b8860b',
          700: '#9a7209',
          800: '#7c5c07',
          900: '#5e4605',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
