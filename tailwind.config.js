/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1A1714',
        espresso: '#2B2520',
        ivory: '#F7F3EC',
        cream: '#EFE8DC',
        sand: '#E2D8C7',
        gold: '#B08D57',
        'gold-deep': '#8A6D3E',
        champagne: '#D9C3A1',
        stone: '#6B6258',
        'stone-light': '#9A9088',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        wide2: '0.18em',
      },
      boxShadow: {
        soft: '0 10px 40px -20px rgba(26,23,20,0.25)',
        card: '0 18px 50px -28px rgba(26,23,20,0.35)',
      },
    },
  },
  plugins: [],
}
