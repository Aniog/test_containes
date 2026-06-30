/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep warm charcoal base
        obsidian: '#1A1714',
        'obsidian-light': '#2C2825',
        // Warm off-white / cream
        ivory: '#F7F3EE',
        'ivory-dark': '#EDE8E1',
        // Warm gold accent
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        // Muted warm taupe
        taupe: '#8C7B6B',
        'taupe-light': '#B5A898',
        // Soft blush for accents
        blush: '#E8D5C4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
