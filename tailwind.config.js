/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          cream: '#FAF7F2',
          sand: '#F3EDE4',
          taupe: '#C8BFB0',
          warmgray: '#8A8279',
          charcoal: '#2C2A26',
          gold: '#B89B72',
          goldlight: '#D4C2A6',
          rosequartz: '#E8DDD4',
          ivory: '#FFFFFF',
        },
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}
