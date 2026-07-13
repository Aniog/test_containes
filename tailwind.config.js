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
        'brand-blue-dark': '#123570',
        'brand-blue-light': '#EBF2FB',
        'brand-orange': '#E8600A',
        'brand-dark': '#1A2332',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
