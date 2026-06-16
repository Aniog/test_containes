/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'steel-navy': '#0D1B2A',
        'iron-blue': '#1B3A5C',
        'precision-blue': '#1E6FBF',
        'sky-accent': '#3B9EE8',
        'warm-white': '#F8F9FA',
        'light-gray': '#E9ECEF',
        'mid-gray': '#6C757D',
        'dark-gray': '#343A40',
        'copper-gold': '#C8922A',
        'light-gold': '#F0C060',
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
