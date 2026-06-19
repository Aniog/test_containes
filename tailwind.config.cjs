/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          50:  '#f8f5f2',
          100: '#efe8e0',
          200: '#dfd1c3',
          300: '#ccb49f',
          400: '#b8947c',
          500: '#a87d64',
          600: '#956a55',
          700: '#7a5545',
          800: '#63473c',
          900: '#523c34',
          950: '#2d1f1a',
        },
        gold: {
          50:  '#fdfaed',
          100: '#f9f1cc',
          200: '#f3e396',
          300: '#ecce5b',
          400: '#e6bc35',
          500: '#d6a41e',
          600: '#b88417',
          700: '#936116',
          800: '#7a4d1a',
          900: '#68401c',
          950: '#3c210c',
        },
        cream: {
          50:  '#fefdfb',
          100: '#fdf9f2',
          200: '#faf1e0',
          300: '#f5e5c8',
          400: '#eed3a5',
          500: '#e5bc7e',
          600: '#d6a45a',
          700: '#b88740',
          800: '#966c38',
          900: '#7a5933',
          950: '#422e19',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.15em',
        wide: '0.08em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
