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
          light: '#D9C3A0',
        },
        muted: {
          DEFAULT: '#6B6258',
          dark: '#B8AE9F',
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
    },
  },
  plugins: [],
}
