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
        'brand-blue-dark': '#153d73',
        'brand-red': '#C0392B',
        'brand-red-dark': '#a93226',
        'brand-gold': '#D4A017',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
