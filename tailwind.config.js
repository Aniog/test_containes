/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1C1714',
        'espresso-soft': '#2A2320',
        ivory: '#F7F3EC',
        cream: '#EFE8DC',
        sand: '#E2D8C7',
        gold: '#B08D57',
        'gold-deep': '#8A6A3B',
        ink: '#2A2320',
        stone: '#6B6258',
        mist: '#E8E0D4',
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
