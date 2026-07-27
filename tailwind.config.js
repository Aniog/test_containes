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
          50:  '#EEF2F9',
          100: '#D5E0F0',
          200: '#ABBFE1',
          400: '#5780C0',
          600: '#2A5298',
          700: '#1E3F7A',
          800: '#1B3A6B',
          900: '#0F2347',
        },
        gold: {
          400: '#E8B84B',
          500: '#D4A030',
          600: '#C8922A',
          700: '#A87520',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

