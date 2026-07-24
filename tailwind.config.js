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
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fdf9f0',
          100: '#f9f0d9',
          200: '#f2dea8',
          300: '#e9c76e',
          400: '#e2b04a',
          500: '#c89433',
          600: '#b07628',
          700: '#935823',
          800: '#784723',
          900: '#643b20',
        },
        cream: {
          50: '#fefdfb',
          100: '#fcf8f0',
          200: '#f7eed9',
        },
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#4a4a4a',
        },
        ivory: '#f8f5f0',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
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
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
