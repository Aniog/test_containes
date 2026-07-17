/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#201815',
          cocoa: '#4b3b34',
          truffle: '#7b675b',
          parchment: '#f7f1ea',
          sand: '#eadfce',
          blush: '#efe6dc',
          champagne: '#cba06d',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 45px -28px rgba(32, 24, 21, 0.28)',
        float: '0 24px 55px -35px rgba(32, 24, 21, 0.35)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      transitionTimingFunction: {
        velvet: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
