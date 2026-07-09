/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        cosmos: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#4263eb',
          800: '#3b5bdb',
          900: '#364fc7',
          950: '#1a1a3e',
        },
        micro: {
          50: '#e6fcf5',
          100: '#c3fae8',
          200: '#96f2d7',
          300: '#63e6be',
          400: '#38d9a9',
          500: '#20c997',
          600: '#12b886',
          700: '#0ca678',
          800: '#099268',
          900: '#087f5b',
          950: '#064e3b',
        },
        nebula: {
          50: '#fff0f6',
          100: '#ffd8e8',
          200: '#ffadd2',
          300: '#ff85c0',
          400: '#f759ab',
          500: '#eb2f96',
          600: '#c41d7f',
          700: '#9e1068',
          800: '#780650',
          900: '#520339',
          950: '#3a0228',
        },
      },
    },
  },
  plugins: [],
}
