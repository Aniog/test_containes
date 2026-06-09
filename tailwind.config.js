/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1A4B8C',
        'brand-red': '#C0392B',
        'brand-gold': '#D4A017',
        'brand-dark': '#1E2A3A',
        'brand-light': '#F7F9FC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
