/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        warm: {
          50: '#FDFAF7',
          100: '#F5EDE4',
          200: '#E8D9C5',
          300: '#D4BFA0',
          400: '#C8A87C',
          500: '#BA9464',
          600: '#A67B51',
          700: '#8B6443',
          800: '#73523B',
          900: '#5C4232',
        },
        espresso: {
          50: '#F5F2F0',
          100: '#E0D8D2',
          200: '#C4B8AE',
          300: '#A8988A',
          400: '#8B7E74',
          500: '#6B5F57',
          600: '#554A43',
          700: '#423934',
          800: '#2C2420',
          900: '#1A1817',
        },
        gold: {
          50: '#FDF8F0',
          100: '#F9EDD5',
          200: '#F2D9A8',
          300: '#E8C27A',
          400: '#D4A84C',
          500: '#C49A36',
          600: '#A8802C',
          700: '#8B6526',
          800: '#735224',
          900: '#5C4322',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.08em',
        wide: '0.04em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
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
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
