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
          cream: '#F7F3EE',
          sand: '#EDE6DC',
          warm: '#D4C4B0',
          taupe: '#9E8E7E',
          brown: '#6B5E51',
          espresso: '#3D3229',
          charcoal: '#2A2320',
          gold: '#C9A96E',
          goldLight: '#DDBF8A',
          goldDark: '#A6824A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      transitionTimingFunction: {
        'velmora': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
