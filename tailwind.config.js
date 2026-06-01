/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cinema-black': '#0d0d0d',
        'cinema-dark': '#1a1a1a',
        'cinema-mid': '#242424',
        'cinema-surface': '#2e2e2e',
        'cinema-white': '#f0ece4',
        'cinema-grey': '#9e9a93',
        'cinema-muted': '#5a5752',
        'gold': '#c9a84c',
        'gold-muted': '#a8893d',
        'gold-light': '#e2c97e',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        'cinema': '21 / 9',
        'editorial': '16 / 9',
        'portrait': '3 / 4',
      },
      transitionDuration: {
        '700': '700ms',
        '1000': '1000ms',
      },
      letterSpacing: {
        'widest-xl': '0.3em',
        'widest-2xl': '0.4em',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
