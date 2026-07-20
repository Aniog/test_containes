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
        ivory: {
          50: '#FDFCFA',
          100: '#F8F5F1',
          200: '#F0EBE5',
          300: '#E5DDD4',
          400: '#D4C9BD',
        },
        charcoal: {
          50: '#F5F4F3',
          100: '#E8E6E4',
          200: '#B8B2AB',
          300: '#8A837B',
          400: '#6B6460',
          500: '#4A4541',
          600: '#3A3632',
          700: '#2A2724',
          800: '#1A1714',
          900: '#0F0E0C',
        },
        gold: {
          50: '#FBF8F0',
          100: '#F5EDD8',
          200: '#EDDFB8',
          300: '#DFCC8E',
          400: '#D4B968',
          500: '#C6A962',
          600: '#B89845',
          700: '#9A7D38',
          800: '#7C642D',
          900: '#5E4C22',
        },
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
