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
        sand: '#E8DDD0',
        gold: '#C9A96E',
        golddark: '#A8864A',
        deepbrown: '#3D3027',
        softblack: '#1E1B18',
        taupe: '#8B7E74',
        stone: '#B8AFA5',
        blush: '#F5EDE4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        superwide: '0.32em',
      },
    },
  },
  plugins: [],
}
