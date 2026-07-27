/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f8',
          100: '#d9e0eb',
          200: '#b3c2d6',
          300: '#8da4c2',
          400: '#6686ad',
          500: '#406899',
          600: '#1B3A5C',
          700: '#152e4a',
          800: '#0f2237',
          900: '#0a1625',
        },
        gold: {
          50: '#fdf8f0',
          100: '#f9edd9',
          200: '#f2dab3',
          300: '#ebc88d',
          400: '#e4b566',
          500: '#C8963E',
          600: '#a87a2e',
          700: '#7e5c22',
          800: '#543d17',
          900: '#2a1f0b',
        },
        green: {
          500: '#2D6A4F',
          600: '#245540',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
