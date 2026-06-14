/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0F2A4A',
        'brand-red': '#C0392B',
        'brand-gold': '#D4A017',
        'brand-light': '#F4F7FB',
        'brand-slate': '#4A5568',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
