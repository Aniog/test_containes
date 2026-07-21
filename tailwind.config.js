/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1C1A17',
        cream: '#F7F3EC',
        sand: '#EFE8DC',
        stone: '#8A8276',
        hairline: '#E2D9CB',
        gold: '#B08D57',
        'gold-deep': '#94723F',
        champagne: '#E7D6B8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        wide2: '0.18em',
      },
    },
  },
  plugins: [],
}
