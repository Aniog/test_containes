/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#F8F3EA',
          cream: '#FFFDF8',
          champagne: '#E7D6BD',
          gold: '#B8894B',
          amber: '#D4A866',
          espresso: '#211713',
          mocha: '#5A4438',
          sage: '#8B8A74',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(33, 23, 19, 0.10)',
        editorial: '0 26px 80px rgba(33, 23, 19, 0.16)',
      },
    },
  },
  plugins: [],
}
