/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f5f3',
          100: '#e8e6e1',
          200: '#d1cdc3',
          300: '#b3ad9e',
          400: '#9a927f',
          500: '#8a816d',
          600: '#7d7462',
          700: '#6a6253',
          800: '#585148',
          900: '#2d2a26',
          950: '#1a1816',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9ecc9',
          200: '#f2d78e',
          300: '#ebbe54',
          400: '#e6aa2e',
          500: '#d48d1a',
          600: '#b86e15',
          700: '#934f16',
          800: '#793f19',
          900: '#68351a',
          950: '#3d1b0a',
        },
        cream: {
          50: '#fefcf7',
          100: '#fcf6e8',
          200: '#f7ebcc',
          300: '#f0daa2',
          400: '#e8c26e',
          500: '#e1aa46',
          600: '#d39233',
          700: '#b7782b',
          800: '#92602a',
          900: '#764e27',
          950: '#3f2913',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wideplus: '0.08em',
        widestplus: '0.15em',
      },
    },
  },
  plugins: [],
}
