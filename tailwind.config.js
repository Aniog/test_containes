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
          cream: '#F7F4EF',
          parchment: '#EDE8E0',
          sand: '#D8CFC3',
          taupe: '#A89F91',
          stone: '#7A7268',
          espresso: '#3D3530',
          ink: '#1C1816',
          gold: '#B8965E',
          goldLight: '#D4B882',
          goldDark: '#8F7040',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.25em',
        'ultra': '0.35em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
