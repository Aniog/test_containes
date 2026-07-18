/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        sand: '#F3EDE4',
        charcoal: '#1A1714',
        muted: '#6B6156',
        stone: '#9C9488',
        gold: '#C9A96E',
        'gold-hover': '#B8954F',
        'gold-light': '#E8D5B0',
        hairline: '#E5DDD2',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
