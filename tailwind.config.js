/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1B4F8A',
        'brand-navy': '#0D2B4E',
        'brand-orange': '#E8621A',
        'brand-blue-light': '#EBF3FB',
        'brand-gray': '#F5F7FA',
        'brand-text': '#1A2332',
        'brand-muted': '#6B7A8D',
        'brand-border': '#D8E2EE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
