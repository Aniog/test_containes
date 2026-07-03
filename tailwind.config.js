/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#FAF7F2',
          charcoal: '#1C1917',
          gold: '#B8956A',
          'gold-light': '#D4B896',
          'gold-dark': '#8B6D47',
          'warm-gray': '#A8A29E',
          border: '#E7E0D8',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'mega-wide': '0.25em',
      },
    },
  },
  plugins: [],
}
