/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        warmwhite: '#FDFBF7',
        deepbrown: '#2C2416',
        mocha: '#4A3728',
        sand: '#D4C4B0',
        gold: '#C8A45C',
        goldlight: '#E0CD94',
        rose: '#B8584C',
        sage: '#8B9D83',
        charcoal: '#1E1B18',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.08em',
      },
    },
  },
  plugins: [],
}
