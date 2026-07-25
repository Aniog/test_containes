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
          bg: '#F9F8F6',
          text: '#2C2A29',
          accent: '#C19A6B',
          'accent-hover': '#A88358',
          border: '#E8E5E1',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
