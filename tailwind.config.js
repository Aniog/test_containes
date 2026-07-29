/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1A3C6E',
        'brand-navy-dark': '#152f58',
        'brand-red': '#C0392B',
        'brand-red-dark': '#a93226',
        'brand-gold': '#D4A017',
        'brand-dark': '#1A2332',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
