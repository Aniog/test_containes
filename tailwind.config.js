/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        cream: '#F5F0E8',
        champagne: '#E8DFD0',
        gold: {
          DEFAULT: '#C9A962',
          light: '#D4BC7D',
          dark: '#8B7340',
        },
        charcoal: '#2C2824',
        stone: '#6B635A',
        mist: '#9A938A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
      },
      transitionTimingFunction: {
        'silk': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
