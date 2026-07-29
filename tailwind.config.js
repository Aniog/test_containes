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
        'brand-blue': '#1A5FA8',
        'brand-sky': '#2E8BC0',
        'brand-gold': '#D4A017',
        'brand-light': '#F4F7FB',
        'brand-white': '#FFFFFF',
        'brand-gray': '#6B7280',
        'brand-dark': '#1C2B3A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
