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
          50: '#EEF1F7',
          100: '#D5DCE9',
          200: '#AABAD3',
          300: '#7F97BD',
          400: '#5475A7',
          500: '#3A5A8C',
          600: '#2E4870',
          700: '#233654',
          800: '#1E2F48',
          900: '#1B2B4B',
          950: '#111C30',
        },
        gold: {
          DEFAULT: '#D4A017',
          light: '#F0C84A',
          dark: '#A87C10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
