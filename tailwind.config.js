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
          cream: '#F7F5F2',
          creamDark: '#EDEAE5',
          ink: '#1A1A1A',
          charcoal: '#2D2D2D',
          stone: '#6B6560',
          warmGray: '#9C958D',
          divider: '#E0DBD5',
          gold: '#B48A3A',
          goldDark: '#9A732E',
          goldLight: '#D4B87A',
        }
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
