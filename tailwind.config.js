/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chengdu-red': '#C0392B',
        'chengdu-red-light': '#E74C3C',
        'chengdu-red-dark': '#922B21',
        'chengdu-gold': '#D4A017',
        'chengdu-gold-light': '#F0C040',
        'chengdu-dark': '#1A1A2E',
        'chengdu-warm': '#F9F5F0',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        sans: ['"Noto Sans SC"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
