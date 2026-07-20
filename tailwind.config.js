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
          bg: '#FAF6F1',
          surface: '#FFFFFF',
          text: '#2B2118',
          muted: '#6B5D4D',
          accent: '#B3875F',
          'accent-hover': '#9A6F4B',
          border: '#E8E0D6',
          gold: '#C9A472',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
