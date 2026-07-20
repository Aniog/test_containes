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
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F0EBE3',
          300: '#E3D9C8',
          400: '#D4C4A8',
          500: '#C8A45C',
          600: '#B8924A',
          700: '#9A7A3A',
          800: '#7D6230',
          900: '#5C4822',
        },
        deep: {
          50: '#F5F4F3',
          100: '#E8E6E3',
          200: '#D1CEC9',
          300: '#B5B0A9',
          400: '#8F8980',
          500: '#6B655C',
          600: '#4A4540',
          700: '#36312D',
          800: '#242120',
          900: '#1A1817',
          950: '#0F0E0D',
        },
        gold: {
          50: '#FDF9F2',
          100: '#F9EFDB',
          200: '#F2DEB5',
          300: '#E8C77F',
          400: '#DCB052',
          500: '#C8A45C',
          600: '#B8924A',
          700: '#9A7A3A',
          800: '#7D6230',
          900: '#5C4822',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.12em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
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
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
