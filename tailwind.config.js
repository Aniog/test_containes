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
        ink: '#2A2420',
        ivory: '#F7F2EA',
        cream: '#FBF8F2',
        sand: '#E8DECF',
        gold: '#B08A4F',
        'gold-deep': '#8A6A38',
        muted: '#8A7F73',
        stone: '#6B6258',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
