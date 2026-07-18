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
          cream: '#FBF7F4',
          sand: '#F0EAE4',
          gold: '#C8A96E',
          'gold-dark': '#B8944F',
          'gold-light': '#DFCDA0',
          charcoal: '#2B2B2B',
          slate: '#4A4A4A',
          warmgray: '#8C8179',
          border: '#E8E0D9',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.35em',
      },
    },
  },
  plugins: [],
}
