/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1a1714',
        charcoal: '#2c2825',
        ivory: '#f5f0e8',
        cream: '#faf7f2',
        gold: '#c9a96e',
        'gold-light': '#e2c98a',
        'gold-dark': '#a8854a',
        'warm-white': '#fefcf8',
        stone: '#8c8278',
        blush: '#e8ddd4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.3em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
