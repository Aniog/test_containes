/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EC',
        cream: '#EFE8DC',
        sand: '#E2D8C6',
        espresso: '#2A211A',
        cocoa: '#4A3F33',
        taupe: '#8A7C6A',
        gold: '#B08D57',
        'gold-deep': '#9A7544',
        champagne: '#D9C7A3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
    },
  },
  plugins: [],
}
