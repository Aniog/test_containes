/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#1d1614',
        espresso: '#362a26',
        porcelain: '#f6f0e8',
        sand: '#ece2d8',
        mist: '#dacdc0',
        champagne: '#b58a57',
        rose: '#8a6a62',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
