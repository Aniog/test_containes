/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'velmora-ink': '#171312',
        'velmora-noir': '#221c1a',
        'velmora-stone': '#8b7d73',
        'velmora-sand': '#f5f0ea',
        'velmora-ivory': '#fcf9f5',
        'velmora-gold': '#d3b277',
        'velmora-rose': '#d8c0b4',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 18px 45px rgba(23, 19, 18, 0.14)',
        soft: '0 10px 30px rgba(23, 19, 18, 0.08)',
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
