/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          noir: '#201916',
          truffle: '#332925',
          porcelain: '#f6f1ea',
          ivory: '#fffaf5',
          champagne: '#c9a46a',
          mist: '#b9ae9f',
          rosewood: '#825e59',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.28em',
      },
      boxShadow: {
        velvet: '0 20px 60px rgba(32, 25, 22, 0.12)',
        soft: '0 12px 30px rgba(32, 25, 22, 0.08)',
      },
      borderRadius: {
        soft: '1.5rem',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
