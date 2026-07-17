/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#1f1a17',
        'velmora-pearl': '#f7f2eb',
        'velmora-sand': '#d8ccbd',
        'velmora-gold': '#c9a66b',
        'velmora-rose': '#ead9d2',
        'velmora-mist': '#f0e9e1',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(31, 26, 23, 0.08)',
      },
      letterSpacing: {
        product: '0.28em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
