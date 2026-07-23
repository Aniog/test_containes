/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        cream: '#F3EEE6',
        sand: '#E8DFD2',
        linen: '#E4DCD0',
        ash: '#9C9284',
        mink: '#7A6E60',
        espresso: {
          DEFAULT: '#201914',
          800: '#2B231C',
          700: '#3A3028',
          300: '#B8AC9C',
          200: '#CFC5B6',
        },
        umber: '#4A3F35',
        bronze: {
          DEFAULT: '#A97E3F',
          dark: '#8F6832',
          light: '#C4A05F',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.22em',
      },
      transitionDuration: {
        700: '700ms',
      },
    },
  },
  plugins: [],
}
