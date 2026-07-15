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
          50: '#FEFCF8',
          100: '#FDF8EE',
          200: '#FAF0DC',
          300: '#F5E4C0',
          400: '#EDD5A0',
          500: '#E5C580',
          DEFAULT: '#FEFCF8',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#A3A3A3',
          400: '#737373',
          500: '#4A4A4A',
          600: '#3A3A3A',
          700: '#2D2D2D',
          800: '#1F1F1F',
          900: '#141414',
          DEFAULT: '#1F1F1F',
        },
        gold: {
          50: '#FFF9EB',
          100: '#FFF0CC',
          200: '#FFE099',
          300: '#FFD066',
          400: '#FFC033',
          500: '#C9973D',
          600: '#B08430',
          700: '#8C6A26',
          800: '#68501D',
          900: '#443513',
          DEFAULT: '#C9973D',
        },
        warm: {
          50: '#FBF8F4',
          100: '#F5EDE0',
          200: '#EDE0C8',
          300: '#DCC9A3',
          400: '#C8AD7A',
          500: '#B49151',
          DEFAULT: '#FBF8F4',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultrawide': '0.25em',
        'superwide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
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
