/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#1A1714',
        'charcoal': '#2C2824',
        'warm-gray': '#6B6460',
        'stone': '#9C9590',
        'sand': '#D4CBC3',
        'cream': '#FAF7F2',
        'ivory': '#FFFDF9',
        'gold': '#C9A96E',
        'gold-dark': '#A8894F',
        'gold-light': '#E2D1A8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-btn': '0.1em',
      },
    },
  },
  plugins: [],
}
