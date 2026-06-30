/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.32em',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(to bottom, rgba(12, 10, 9, 0.28), rgba(12, 10, 9, 0.76))',
      },
    },
  },
  plugins: [],
}
