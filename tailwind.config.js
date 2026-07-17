/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f6f0e8',
        sand: '#eadfce',
        champagne: '#d8c29f',
        gold: '#b9975b',
        mocha: '#6f6154',
        ink: '#1f1a17',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(31, 26, 23, 0.08)',
        card: '0 10px 30px rgba(31, 26, 23, 0.06)',
      },
      letterSpacing: {
        product: '0.3em',
        luxe: '0.18em',
      },
    },
  },
  plugins: [],
}
