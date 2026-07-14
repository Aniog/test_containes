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
        gold: '#B08D57',
        'gold-deep': '#8A6A3B',
        champagne: '#D9C3A1',
        charcoal: '#3A332C',
        muted: '#8A8074',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.2em',
      },
    },
  },
  plugins: [],
}
