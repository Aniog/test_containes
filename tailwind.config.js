/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A3C6E',
        'navy-dark': '#122B52',
        'navy-light': '#2A5298',
        red: '#C0392B',
        'red-dark': '#A93226',
        gold: '#D4A017',
        'light-blue': '#EBF2FA',
        'dark-text': '#1A1A2E',
        'body-text': '#4A5568',
        'muted-text': '#718096',
        border: '#E2E8F0',
        'success-green': '#2D7D46',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
