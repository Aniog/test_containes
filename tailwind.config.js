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
        obsidian: '#1C1A18',
        'obsidian-light': '#2A2724',
        // Warm cream / ivory
        ivory: '#F7F3EE',
        'ivory-dark': '#EDE8E0',
        // Warm gold accent
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8854A',
        // Muted warm taupe
        taupe: '#8C7B6B',
        'taupe-light': '#B5A898',
        // Text
        'text-primary': '#1C1A18',
        'text-secondary': '#5C5248',
        'text-muted': '#8C7B6B',
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
