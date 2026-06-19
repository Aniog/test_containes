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
          50: '#FFFDF8',
          100: '#FFF9EE',
          200: '#FFF3DD',
          300: '#FFEDCC',
          400: '#FFE7BB',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#A3A3A3',
          400: '#737373',
          500: '#525252',
          600: '#3B3B3B',
          700: '#2A2A2A',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FFF8E1',
          200: '#FFE9A0',
          300: '#FFD966',
          400: '#C9A84C',
          500: '#B8942E',
          600: '#9A7B24',
          700: '#7C631D',
          800: '#5E4B16',
          900: '#40330F',
        },
        rose: {
          50: '#FFF5F5',
          100: '#FFE5E5',
          200: '#FFCCCC',
          300: '#E8A0A0',
          400: '#D4847A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
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
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
