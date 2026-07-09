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
        cream: '#F7F3EC',
        sand: '#EDE6DA',
        stone: '#8A8175',
        gold: '#B08D57',
        'gold-deep': '#9A7544',
        champagne: '#E8D9B8',
        line: '#E2D9CB',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.18em',
        widest3: '0.22em',
      },
    },
  },
  plugins: [],
}
