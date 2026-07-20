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
        cream: '#FBF8F2',
        sand: '#EDE6D8',
        espresso: '#2A211B',
        cocoa: '#4A3F36',
        taupe: '#8A7E6E',
        gold: '#B08A4F',
        'gold-deep': '#8C6A36',
        'gold-soft': '#D9BE8A',
        line: '#E2D9C8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(42,33,27,0.06)',
        card: '0 12px 40px rgba(42,33,27,0.08)',
      },
    },
  },
  plugins: [],
}
