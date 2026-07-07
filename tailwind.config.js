/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F3',
        warm: {
          50: '#FDF8F3',
          100: '#F9F0E5',
          200: '#F3E2CB',
          300: '#E8CFA8',
          400: '#D4A66A',
          500: '#C4934A',
          600: '#B07D3B',
          700: '#926433',
          800: '#7A522E',
          900: '#664429',
        },
        charcoal: {
          50: '#F5F4F3',
          100: '#E8E6E3',
          200: '#D1CEC9',
          300: '#B3AEA7',
          400: '#8D867D',
          500: '#726C64',
          600: '#5C564F',
          700: '#4A4440',
          800: '#3D3835',
          900: '#2D2927',
          950: '#1B1816',
        },
        gold: {
          50: '#FDF9F0',
          100: '#F9F0DB',
          200: '#F2DFB6',
          300: '#E9C887',
          400: '#DEAD57',
          500: '#D49736',
          600: '#C47F2C',
          700: '#A36327',
          800: '#845026',
          900: '#6C4322',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        super: '0.25em',
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
