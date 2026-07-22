/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F4',
        gold: '#C8A45C',
        'gold-dark': '#B8944E',
        'warm-beige': '#E8E2D8',
        'muted-text': '#6B6B6B',
        'light-text': '#999999',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
