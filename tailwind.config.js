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
          50:  '#EEF1F7',
          100: '#D5DCE9',
          200: '#AABBD3',
          300: '#7F9ABD',
          400: '#5479A7',
          500: '#2E6DA4',
          600: '#245A8A',
          700: '#1B4470',
          800: '#152F56',
          900: '#1B2B4B',
          950: '#0F1A2E',
        },
        brand: {
          red:   '#C0392B',
          'red-dark': '#A93226',
          blue:  '#2E6DA4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

