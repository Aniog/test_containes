/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A843',
          dark: '#8B6508',
          50: '#FDF8E8',
          100: '#F9EDCC',
          200: '#F0D88A',
          300: '#E5C14D',
          400: '#D4A843',
          500: '#B8860B',
          600: '#9A7209',
          700: '#7C5B08',
          800: '#5E4506',
          900: '#3F2E04',
        },
        cream: {
          DEFAULT: '#FEFCF8',
          dark: '#F8F4EE',
          darker: '#F0EBE3',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#6B6B6B',
          muted: '#9A9A9A',
        },
        warm: {
          border: '#E8E2D8',
          'border-light': '#F0EBE3',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'wide-custom': '0.2em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.3s ease-out forwards',
        slideOutRight: 'slideOutRight 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
}
