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
          espresso: '#231A16',
          ink: '#3A2A24',
          parchment: '#F7F0E6',
          ivory: '#FFF9F0',
          champagne: '#D8B36A',
          brass: '#A87A32',
          blush: '#E8D2C2',
          mist: '#CFC4B6',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(35, 26, 22, 0.10)',
        glow: '0 18px 50px rgba(168, 122, 50, 0.16)',
      },
    },
  },
  plugins: [],
}
