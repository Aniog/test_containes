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
          espresso: '#1c1512',
          espressoSoft: '#332723',
          ivory: '#f7f1ea',
          cream: '#f2e8dc',
          sand: '#e4d3c0',
          taupe: '#b39d8b',
          cacao: '#5f4b3f',
          gold: '#d6b278',
          goldSoft: '#e5c995',
          goldDeep: '#b88a47',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 70px rgba(43, 31, 25, 0.14)',
      },
    },
  },
  plugins: [],
}
