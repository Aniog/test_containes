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
          50: '#EEF2F7',
          100: '#D4DDE9',
          200: '#A9BBD3',
          300: '#7E99BD',
          400: '#5377A7',
          500: '#3A5F8B',
          600: '#2D4B72',
          700: '#1B3A5C',
          800: '#0F2740',
          900: '#081628',
        },
        amber: {
          400: '#F0923A',
          500: '#E87722',
          600: '#D06A1B',
          700: '#B85D17',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
