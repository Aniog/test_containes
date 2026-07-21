/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1A1714',
          soft: '#2A2520',
        },
        ivory: '#F7F3EC',
        cream: '#EFE8DC',
        sand: '#E3D9C8',
        gold: {
          DEFAULT: '#B08D57',
          deep: '#8A6A3B',
          light: '#C9A86A',
        },
        stone: {
          DEFAULT: '#6B6258',
          light: '#9A9085',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.18em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        soft: '0 10px 40px -20px rgba(26,23,20,0.25)',
        card: '0 20px 50px -30px rgba(26,23,20,0.35)',
      },
    },
  },
  plugins: [],
}
