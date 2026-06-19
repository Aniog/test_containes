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
          cream: '#F8F5F0',
          sand: '#EDE8E0',
          stone: '#C8BFAF',
          taupe: '#A39785',
          mocha: '#7A6E5D',
          espresso: '#4A3F35',
          ink: '#2A2420',
          gold: '#C9A962',
          goldHover: '#B8984E',
          warmGray: '#9E968C',
        },
      },
      letterSpacing: {
        widest: '0.25em',
        superwide: '0.35em',
      },
      transitionTimingFunction: {
        velmora: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
