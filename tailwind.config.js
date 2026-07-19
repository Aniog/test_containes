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
          cream: '#F8F5F0',
          ivory: '#FAF9F6',
          sand: '#E8E0D5',
          stone: '#B5A99A',
          taupe: '#8A7E72',
          mocha: '#5C4F42',
          espresso: '#3B2F26',
          charcoal: '#1E1814',
          gold: '#C5A06D',
          goldlight: '#DCC098',
          golddark: '#A07F4D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.18em',
        wider: '0.12em',
        wide: '0.06em',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
