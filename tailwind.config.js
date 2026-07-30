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
          DEFAULT: '#1A3C6E',
          dark: '#15305A',
          light: '#2A5298',
          50: '#EBF2FA',
        },
        brand: {
          red: '#C0392B',
          'red-dark': '#A93226',
          gold: '#D4A017',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
