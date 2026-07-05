/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        velvet: {
          50: '#f7f7f3',
          100: '#efefe1',
          200: '#dddcc1',
          300: '#c3c19b',
          400: '#a8a577',
          500: '#8f8d5f',
          600: '#71704b',
          700: '#59583e',
          800: '#4a4936',
          900: '#3f3e31',
          950: '#1a1a14',
        },
        gold: {
          50: '#fefcf0',
          100: '#fdf5d3',
          200: '#faea9f',
          300: '#f6d966',
          400: '#f2c734',
          500: '#d4a843',
          600: '#b88937',
          700: '#996b2e',
          800: '#7d562b',
          900: '#694828',
          950: '#3d2614',
        },
        clay: {
          50: '#faf6f3',
          100: '#f3ece4',
          200: '#e6d6c4',
          300: '#d5bb9e',
          400: '#c39d79',
          500: '#b68860',
          600: '#a87655',
          700: '#8c5f48',
          800: '#734e3e',
          900: '#5e4135',
          950: '#33211a',
        },
      },
      letterSpacing: {
        'widest-custom': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
      },
    },
  },
  plugins: [],
}
