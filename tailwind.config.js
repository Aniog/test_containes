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
          base: '#1A1A1A',
          cream: '#F5F0EB',
          white: '#FAF9F7',
          gold: '#C9A96E',
          'gold-light': '#D9BC8E',
          'gold-dark': '#A6884D',
          muted: '#8A8A8A',
          'muted-light': '#B5B5B5',
          'border': '#E8E3DE',
          'border-dark': '#D4CFC9',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.3em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      }
    },
  },
  plugins: [],
}
