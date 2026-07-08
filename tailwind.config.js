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
        cream: {
          50: '#FDFCFB',
          100: '#FAF7F4',
          200: '#F5F0EA',
          300: '#EDE6DC',
          400: '#E2D8CC',
        },
        gold: {
          300: '#D4B896',
          400: '#C9A96E',
          500: '#B8953A',
          600: '#9A7A2F',
          700: '#7D6326',
        },
        dark: {
          900: '#1A1715',
          800: '#2D2926',
          700: '#3E3935',
          600: '#555049',
          500: '#6B6560',
        },
        stone: {
          100: '#F0ECE7',
          200: '#E5DFD8',
          300: '#D5CEC5',
          400: '#B8B0A5',
        },
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.35s ease-out',
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
