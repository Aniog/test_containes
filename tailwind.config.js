/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Elegant warm neutrals
        cream: {
          50: '#FDFCFA',
          100: '#F9F6F1',
          200: '#F3EDE3',
          300: '#E8DFD0',
          400: '#D4C4AD',
        },
        // Deep charcoal for premium feel
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#666666',
          600: '#4A4A4A',
          700: '#333333',
          800: '#1F1F1F',
          900: '#141414',
        },
        // Rich warm gold
        gold: {
          50: '#FDF9F0',
          100: '#F9F0D9',
          200: '#F2DEB3',
          300: '#E8C680',
          400: '#D4A854',
          500: '#C9963D',
          600: '#B07D2E',
          700: '#8A6123',
          800: '#6B4B1C',
          900: '#4D3614',
        },
        // Rose gold accent
        rose: {
          50: '#FDF5F3',
          100: '#FAEAE6',
          200: '#F5D4CC',
          300: '#EAB5A8',
          400: '#D98B79',
          500: '#C96A54',
          600: '#A84F3C',
          700: '#833D30',
          800: '#5E2C22',
          900: '#3D1C16',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'extra-wide': '0.15em',
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
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
