/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#211816',
        espresso: '#3a2b28',
        parchment: '#f7f1ea',
        ivory: '#fffaf4',
        champagne: '#d8bd8b',
        rose: '#ead9d2',
        sand: '#d8c7b5',
        mist: '#efe7df',
        taupe: '#705d57',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        velmora: '0 20px 60px rgba(33, 24, 22, 0.12)',
      },
    },
  },
  plugins: [],
}
