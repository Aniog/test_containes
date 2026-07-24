/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#140f0d',
        ivory: '#fcf8f2',
        stone: '#eee5d9',
        ink: '#1c1713',
        cream: '#f8f2e8',
        gold: '#c1a667',
        line: '#d7cab9',
      },
    },
  },
  plugins: [],
}
