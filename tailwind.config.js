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
          50: '#FDFBF7',
          100: '#FAF6ED',
          200: '#F5EDE0',
          300: '#EFE3D0',
        },
        gold: {
          50: '#FDF9F0',
          100: '#FBF0D9',
          200: '#F5DFB0',
          300: '#EDC87A',
          400: '#D4A84B',
          500: '#C4943A',
          600: '#A67B2E',
          700: '#866025',
          800: '#6D4D21',
          900: '#5A3F1C',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6B6B6B',
          600: '#4A4A4A',
          700: '#333333',
          800: '#1F1F1F',
          900: '#141414',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
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
