/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#171412',
        espresso: '#2A211B',
        porcelain: '#F8F3EC',
        pearl: '#FFFDF8',
        sand: '#E8DCCB',
        champagne: '#C9A45C',
        antique: '#8A642C',
        stone: '#6F665D',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
