/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1714',
        'velmora-charcoal': '#2C2825',
        'velmora-cream': '#FAF7F2',
        'velmora-linen': '#F0EBE3',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E8D5B0',
        'velmora-gold-dark': '#A8854A',
        'velmora-muted': '#8C7B6B',
        'velmora-stone': '#D4C9BC',
        'velmora-white': '#FFFFFF',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
