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
        cream: '#F3EEE5',
        sand: '#E8E0D2',
        espresso: '#2B2118',
        cocoa: '#4A3C2E',
        mocha: '#6E5D4B',
        taupe: '#A3937F',
        gold: '#A9814B',
        'gold-deep': '#8A6A3C',
        'gold-soft': '#C9B08A',
        line: '#E3DACB',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      transitionDuration: {
        600: '600ms',
      },
    },
  },
  plugins: [],
}
