/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F4',
        sand: '#F3EDE6',
        warm: '#EAE0D5',
        stone: '#8B8178',
        charcoal: '#2C2A28',
        bronze: '#B8976E',
        gold: '#C8A87C',
        'gold-light': '#E8D5B7',
        'gold-dark': '#9B7B5C',
        espresso: '#1E1B18',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
    },
  },
  plugins: [],
}
