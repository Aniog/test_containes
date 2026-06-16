/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f8f9',
          100: '#ebedf1',
          200: '#d4d9e2',
          300: '#aeb8c9',
          400: '#8292ab',
          500: '#637491',
          600: '#4e5d78',
          700: '#404c62',
          800: '#374153',
          900: '#1b2332',
          950: '#0f1520',
        },
        accent: {
          50: '#fef7ee',
          100: '#fdedd7',
          200: '#f9d6ae',
          300: '#f5b97a',
          400: '#f09444',
          500: '#ec7a20',
          600: '#dd6016',
          700: '#b74814',
          800: '#923918',
          900: '#763116',
          950: '#401609',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
