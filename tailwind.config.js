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
        'obsidian-soft': '#2A2420',
        // Warm cream / ivory
        ivory: '#F7F3EE',
        'ivory-dark': '#EDE8E0',
        // Gold accent
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        // Muted warm taupe
        taupe: '#8C7B6B',
        'taupe-light': '#B5A898',
        // Text
        'text-primary': '#1A1714',
        'text-secondary': '#5C4F42',
        'text-muted': '#9C8E82',
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
