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
        espresso: '#2A2420',
        cream: '#F7F3EC',
        sand: '#EDE6DA',
        stone: '#C9BFB0',
        gold: '#B08D57',
        'gold-deep': '#8A6A3B',
        charcoal: '#2A2420',
        muted: '#7A6F62',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.18em',
      },
    },
  },
  plugins: [],
}
