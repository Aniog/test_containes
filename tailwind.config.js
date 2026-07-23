/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: '#1A1410',
        cream: '#F7F3EE',
        'warm-white': '#FAF8F5',
        gold: '#C5A06D',
        'gold-hover': '#B08D5C',
        taupe: '#9E9488',
        linen: '#EDE8E0',
        blush: '#F2ECE4',
        charcoal: '#2D2420',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
