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
        ivory: '#F8F4EE',
        parchment: '#F0EBE3',
        charcoal: '#1A1A1A',
        warmGray: '#6B6B6B',
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5B7',
          dark: '#B8944D',
        },
        border: '#E5E0D8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
    },
  },
  plugins: [],
}
