/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        'ivory-dark': '#F2EDE4',
        obsidian: '#1A1714',
        'obsidian-light': '#2E2A26',
        'warm-stone': '#8C7B6B',
        gold: '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-dark': '#A07840',
        blush: '#E8D5C4',
        charcoal: '#4A4540',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'extra-wide': '0.15em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
