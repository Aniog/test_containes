/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velvet: '#1f171a',
        'velvet-soft': '#2c2327',
        ivory: '#f6efe6',
        ink: '#241d1b',
        mist: '#ccbdb0',
        gold: '#c7a267',
        'gold-soft': '#e7d4b2',
        'line-dark': 'rgba(231, 212, 178, 0.16)',
        'line-light': 'rgba(36, 29, 27, 0.12)',
        panel: '#efe4d5',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 80px rgba(12, 8, 10, 0.22)',
        card: '0 18px 48px rgba(12, 8, 10, 0.14)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
