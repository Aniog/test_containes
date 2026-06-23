/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
      sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
    },
    extend: {
      colors: {
        velvet: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e7dfd1',
          300: '#d5c8b2',
          400: '#bfab8d',
          500: '#a89270',
          600: '#8e795c',
          700: '#75614a',
          800: '#5f4d3c',
          900: '#4d3f32',
          950: '#2a2019',
        },
        cream: {
          50: '#fefdfb',
          100: '#fcf9f3',
          200: '#f8f2e5',
          300: '#f2e7ce',
          400: '#ebd9b0',
          500: '#e3c892',
          600: '#d4ab68',
          700: '#b88846',
          800: '#9a6e3a',
          900: '#7d5933',
          950: '#432e1a',
        },
        warm: {
          50: '#fdf8f3',
          100: '#faf0e4',
          200: '#f5e0ca',
          300: '#efcba5',
          400: '#e7b07d',
          500: '#dd935a',
          600: '#ce7a40',
          700: '#ac6335',
          800: '#8a4f2e',
          900: '#704229',
          950: '#3c2014',
        },
      },
      letterSpacing: {
        widest: '0.28em',
        wider: '0.18em',
        wide: '0.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.35s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
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
