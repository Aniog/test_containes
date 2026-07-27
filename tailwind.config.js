/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1A3C6E',
        'navy-dark': '#15305A',
        'navy-light': '#2A4F8A',
        'china-red': '#C0392B',
        'china-red-dark': '#A93226',
        'gold-accent': '#D4A017',
        'bg-light': '#F8F9FB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
