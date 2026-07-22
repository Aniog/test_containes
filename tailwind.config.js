/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e6dfd2',
          300: '#d4c8b1',
          400: '#bfac8d',
          500: '#ad9673',
          600: '#9b8262',
          700: '#816b52',
          800: '#6a5946',
          900: '#3d3228',
          950: '#241d17',
        },
        warm: {
          50: '#fdfaf5',
          100: '#faf2e0',
          200: '#f4e3bf',
          300: '#edce94',
          400: '#e5b468',
          500: '#dc9e47',
          600: '#cd883c',
          700: '#ab6b32',
          800: '#8a552f',
          900: '#70472a',
          950: '#3d2314',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf2dd',
          300: '#f5e6bf',
          400: '#efd69a',
          500: '#e7c374',
          600: '#daa84e',
          700: '#b98b38',
          800: '#96702f',
          900: '#7a5c2c',
          950: '#423015',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'super-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
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
