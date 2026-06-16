/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a1a2e',
        gold: '#c9a227',
        'gold-dark': '#b08d1e',
        cream: '#f5f5f0',
        'text-secondary': '#6b6b6b',
        'border-light': '#e0e0d8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
