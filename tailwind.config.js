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
          cream: '#F7F3EE',
          sand: '#EDE6DB',
          warm: '#D8CAB8',
          gold: '#B8956A',
          goldDark: '#9A784E',
          brown: '#6B5240',
          espresso: '#3D2B1F',
          charcoal: '#1A1A1A',
        },
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
