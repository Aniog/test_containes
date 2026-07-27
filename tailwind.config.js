/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2647',
          50: '#E8F1FD',
          100: '#D1E3FB',
          200: '#A3C7F7',
          300: '#75ABF3',
          400: '#478FEF',
          500: '#2C74B3',
          600: '#205295',
          700: '#144272',
          800: '#0A2647',
          900: '#051A30',
        },
        accent: {
          DEFAULT: '#2C74B3',
          light: '#E8F1FD',
          dark: '#205295',
        },
        success: '#16A34A',
        warning: '#EA580C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
