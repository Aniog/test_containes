/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'velmora-ivory': '#f7f1ea',
        'velmora-card': '#fcf8f3',
        'velmora-sand': '#eadfce',
        'velmora-blush': '#dcc4b3',
        'velmora-ink': '#1c1714',
        'velmora-cocoa': '#2d241e',
        'velmora-smoke': '#6f6257',
        'velmora-gold': '#b08a47',
        'velmora-bronze': '#8c6731',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        velmora: '0 18px 50px rgba(28, 23, 20, 0.08)',
        soft: '0 10px 30px rgba(28, 23, 20, 0.06)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
    },
  },
  plugins: [],
}
