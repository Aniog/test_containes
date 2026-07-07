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
          DEFAULT: '#1C1714',
          soft: '#3A322C',
        },
        gold: {
          DEFAULT: '#B08D57',
          deep: '#8A6A3B',
          light: '#C9A876',
        },
        ivory: '#F7F3EC',
        cream: '#EFE7DA',
        sand: '#E2D6C2',
        stone: '#8A7F73',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.18em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
