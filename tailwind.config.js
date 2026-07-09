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
          cream:   '#FAF7F2',
          sand:    '#F0EBE3',
          gold:    '#C8A96E',
          bronze:  '#A0845C',
          deep:    '#1A1817',
          charcoal:'#2D2A28',
          taupe:   '#6B5E53',
          blush:   '#E8D5C4',
          pearl:   '#F7F4EF',
        },
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widestplus: '0.25em',
      },
    },
  },
  plugins: [],
}
