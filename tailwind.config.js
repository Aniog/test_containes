/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          50: '#FAF8F5',
          100: '#F5F2EC',
          200: '#E8E3DC',
          300: '#D4CBBE',
          400: '#B8A991',
          500: '#9C8A6E',
          600: '#7A6B55',
          700: '#5D5141',
          800: '#3F382E',
          900: '#2A2520',
          950: '#1A1410',
        },
        gold: {
          light: '#F0E6C8',
          DEFAULT: '#C8A45C',
          dark: '#A8883E',
          muted: '#E8D5A3',
        },
        cream: '#FAF8F5',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
