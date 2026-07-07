/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        cream: '#F5F0E8',
        warmStone: '#E8E0D5',
        gold: {
          50: '#FFF9EB',
          100: '#FFF0CC',
          200: '#FFE0A3',
          300: '#FFD17A',
          400: '#FFC152',
          500: '#D4A853',
          600: '#B8923E',
          700: '#9A7A32',
          800: '#7C6228',
          900: '#5E4A1E',
          DEFAULT: '#D4A853',
        },
        charcoal: '#1A1714',
        richBlack: '#0F0D0B',
        warmGray: {
          50:  '#FAF8F6',
          100: '#F2EDE7',
          200: '#E5DDD4',
          300: '#D4C9BC',
          400: '#B8A99A',
          500: '#9A8A7A',
          600: '#7C6D5E',
          700: '#5E5247',
          800: '#3F3731',
          900: '#2A2520',
        },
        accent: '#D4A853',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'extra-wide': '0.15em',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
