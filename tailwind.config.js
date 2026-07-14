/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1A1714',
        charcoal: '#2C2825',
        stone: '#4A4540',
        parchment: '#F7F3EE',
        cream: '#EDE8E1',
        linen: '#E0D9D0',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        'ink-muted': '#6B6460',
        ivory: '#F7F3EE',
        'ivory-muted': '#C4B9AE',
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
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
      },
    },
  },
  plugins: [],
}
