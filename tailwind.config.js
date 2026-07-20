/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#19130f',
          espresso: '#2c2018',
          mocha: '#4f3a2c',
          ivory: '#f8f1e7',
          pearl: '#fffaf2',
          stone: '#d8cab8',
          taupe: '#a88f77',
          champagne: '#c99a4a',
          gold: '#a9782c',
          blush: '#ead8c8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velmora: '0 24px 80px rgba(44, 32, 24, 0.12)',
        soft: '0 18px 45px rgba(44, 32, 24, 0.08)',
      },
      letterSpacing: {
        luxury: '0.18em',
        widerLuxury: '0.28em',
      },
    },
  },
  plugins: [],
}
