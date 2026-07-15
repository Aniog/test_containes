/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF9F5',
        warm: '#F5EDE4',
        espresso: '#2C2420',
        mocha: '#5C4A3E',
        sand: '#E8D5C4',
        gold: '#C9A96E',
        'gold-light': '#D4BC8A',
        'gold-dark': '#B8944E',
        rose: '#D4A99A',
        'rose-light': '#E8C8BC',
        bone: '#F0EBE3',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.15em',
        wider: '0.25em',
        widest: '0.35em',
      },
    },
  },
  plugins: [],
}
