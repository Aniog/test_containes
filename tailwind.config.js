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
        cream: {
          DEFAULT: '#F7F2EA',
          deep: '#EFE7DA',
        },
        sand: '#E4D8C6',
        gold: {
          DEFAULT: '#B08A4F',
          deep: '#8E6A36',
          soft: '#D9BE8E',
        },
        muted: '#8A7F73',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        wide2: '0.18em',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(28,23,20,0.18)',
        card: '0 6px 24px -10px rgba(28,23,20,0.14)',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}
