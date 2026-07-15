/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#faf8f5',
          50: '#fefdfb',
          100: '#fcfaf7',
          200: '#faf8f5',
          300: '#f3efe8',
          400: '#ebe5db',
          500: '#ddd4c5',
        },
        warm: {
          DEFAULT: '#1a1817',
          50: '#f6f5f4',
          100: '#e8e5e2',
          200: '#d1cdc8',
          300: '#b3ada6',
          400: '#8c8279',
          500: '#6b5f56',
          600: '#554b43',
          700: '#3d3630',
          800: '#2a2521',
          900: '#1a1817',
          950: '#0f0e0d',
        },
        gold: {
          DEFAULT: '#c8a87c',
          50: '#faf7f2',
          100: '#f3ece0',
          200: '#e7d8c0',
          300: '#d8c09c',
          400: '#c8a87c',
          500: '#ba9462',
          600: '#a87e56',
          700: '#8c6748',
          800: '#72543e',
          900: '#5e4635',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.12em',
        wide: '0.06em',
      },
      screens: {
        'xs': '480px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
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
