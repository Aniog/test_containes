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
        'brand-orange': '#E8621A',
        'brand-blue-light': '#EBF2FB',
        'brand-navy': '#0F2D5A',
        'brand-gray': '#F5F7FA',
        'brand-text': '#1A2332',
        'brand-muted': '#6B7A8D',
        'brand-border': '#D8E2EF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
