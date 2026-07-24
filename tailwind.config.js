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
        'gold-deep': '#9A7541',
        champagne: '#E8D9B8',
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
