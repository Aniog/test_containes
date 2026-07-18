/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        velvet: '#241b18',
        ivory: '#f6f0e8',
        champagne: '#c8a36a',
        rose: '#dcc8bc',
        sand: '#e8ddd1',
        ink: '#453833',
        mist: '#fbf8f4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      boxShadow: {
        velvet: '0 20px 60px rgba(36, 27, 24, 0.08)',
        floating: '0 24px 80px rgba(20, 16, 15, 0.18)',
      },
      borderRadius: {
        luxe: '1.75rem',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
