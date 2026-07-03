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
        cream: '#F7F2EA',
        sand: '#EDE4D3',
        stone: '#8A7F73',
        gold: '#B08D57',
        'gold-soft': '#C9A876',
        ivory: '#FBF8F2',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}
