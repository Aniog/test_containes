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
          ivory: '#F3EFE8',
          sand: '#E8E0D4',
          taupe: '#C4B8A8',
          stone: '#8C7F70',
          cocoa: '#5C4F3F',
          espresso: '#2B2218',
          gold: '#C8A882',
          goldlight: '#DCC3A8',
          golddark: '#A6845A',
        }
      },
      letterSpacing: {
        'widest': '0.25em',
        'superwide': '0.35em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}
