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
        'brand-red': '#C0392B',
        'brand-gold': '#D4A017',
        'brand-bg': '#F7F9FC',
        'brand-dark': '#1A2332',
        'brand-muted': '#5A6A7E',
        'brand-border': '#E2E8F0',
        'brand-success': '#27AE60',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
