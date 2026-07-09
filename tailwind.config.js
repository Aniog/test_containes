/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velvet: '#211b18',
        espresso: '#4d4038',
        truffle: '#7b675b',
        champagne: '#b8925e',
        rosegold: '#d2b08d',
        porcelain: '#f6f1eb',
        bone: '#ede4da',
        ivory: '#fffdf9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        editorial: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(33, 27, 24, 0.08)',
        card: '0 16px 40px rgba(33, 27, 24, 0.08)',
      },
      letterSpacing: {
        luxe: '0.32em',
      },
    },
  },
  plugins: [],
}
