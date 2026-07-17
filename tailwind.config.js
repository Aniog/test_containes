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
        parchment: '#F5F0E8',
        linen: '#EDE7DA',
        sand: '#D4C9B5',
        gold: '#C9A96E',
        'gold-light': '#E2C98A',
        'gold-dark': '#A8854A',
        ink: '#1A1714',
        'ink-muted': '#6B6259',
        cream: '#F5F0E8',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.1em',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
    },
  },
  plugins: [],
}
