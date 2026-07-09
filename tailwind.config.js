/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-cream': '#F7F4EF',
        'velmora-warm': '#F0EBE3',
        'velmora-sand': '#E5DDD3',
        'velmora-taupe': '#B8A99A',
        'velmora-charcoal': '#2C2A28',
        'velmora-dark': '#1A1918',
        'velmora-gold': '#C5A265',
        'velmora-gold-light': '#D9BC8B',
        'velmora-gold-dark': '#A6854A',
        'velmora-muted': '#7A736A',
        'velmora-border': '#D8D0C6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
    },
  },
  plugins: [],
}
