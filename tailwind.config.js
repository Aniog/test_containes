/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0A1628',
        'brand-blue': '#1A3A6B',
        'brand-orange': '#F5A623',
        'brand-sky': '#2E7FD9',
        'brand-gray': '#F4F6FA',
        'brand-text': '#1C2B3A',
        'brand-muted': '#5A6A7A',
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
