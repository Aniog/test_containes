/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#211914',
        truffle: '#342821',
        ivory: '#f6f1ea',
        champagne: '#dcc7a1',
        gold: '#b98a4a',
        'rose-clay': '#c9b2a5',
        mist: '#e5ddd4',
        'ink-soft': '#5c5048',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 60px rgba(33, 25, 20, 0.08)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
    },
  },
  plugins: [],
}
