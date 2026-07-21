/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#1b1517',
        'noir-soft': '#2a2124',
        ivory: '#f6f0e8',
        mist: '#ebe1d5',
        taupe: '#73635d',
        gold: '#c8a46a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        brand: '0.24em',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(27, 21, 23, 0.10)',
        card: '0 28px 70px rgba(27, 21, 23, 0.14)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
