/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F4',
        warmwhite: '#FFFAF7',
        espresso: '#2C2416',
        'espresso-light': '#5C4F3C',
        bronze: '#8B6F47',
        'bronze-light': '#A68A5C',
        gold: '#C4A265',
        'gold-light': '#D4B87A',
        sand: '#E8DFD5',
        'sand-light': '#F2ECE5',
        stone: '#9C9488',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.15em',
        wide: '0.08em',
      },
    },
  },
  plugins: [],
}
