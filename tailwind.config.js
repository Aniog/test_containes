/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14110F',
        espresso: '#2A2420',
        cocoa: '#4A3F37',
        champagne: '#C9A86A',
        gold: '#B8924A',
        ivory: '#F7F2EA',
        cream: '#FBF8F2',
        stone: '#8A7F73',
        line: '#E4DBCE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.18em',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20,17,15,0.18)',
        card: '0 6px 24px -10px rgba(20,17,15,0.14)',
      },
      maxWidth: {
        content: '80rem',
      },
    },
  },
  plugins: [],
}
