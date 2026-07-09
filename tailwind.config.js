/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#1C1714',
        ink: '#2A2420',
        gold: {
          DEFAULT: '#B08D57',
          deep: '#8A6A3B',
          light: '#C9A876',
        },
        ivory: '#F7F3EE',
        cream: '#EFE7DC',
        sand: '#E3D8C8',
        stone: '#7A6F63',
        champagne: '#D9C7A8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        wide2: '0.15em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
