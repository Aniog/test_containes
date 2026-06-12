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
        'brand-navy': '#0F2A4A',
        'brand-gray': '#F4F6F9',
        'brand-text': '#1A1A2E',
        'brand-muted': '#4A5568',
        'brand-border': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
