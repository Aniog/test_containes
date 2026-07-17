/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        sand: '#E8E2D9',
        warmGray: '#9B9286',
        charcoal: '#2C2825',
        espresso: '#1F1B18',
        gold: '#C4A962',
        goldLight: '#D4BC7E',
        goldDark: '#A68B4B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
}
