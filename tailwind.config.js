/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        ivory: '#FDFBF7',
        cream: '#F8F5F0',
        champagne: '#F0EBE3',
        gold: {
          50: '#FFF9ED',
          100: '#FEF0D4',
          200: '#FDDEA8',
          300: '#FBC771',
          400: '#F9A83D',
          500: '#C5A572',
          600: '#A68B5B',
          700: '#8B7355',
          800: '#6B5A42',
          900: '#4A3D2E',
        },
        charcoal: '#1A1A1A',
        warmGray: {
          50: '#FAF9F7',
          100: '#F0EDE8',
          200: '#E0DAD2',
          300: '#C9C1B5',
          400: '#A89E8F',
          500: '#8B8172',
          600: '#6E6559',
          700: '#554D44',
          800: '#3D3830',
          900: '#2A2520',
        },
        rose: {
          gold: '#B76E79',
          light: '#E8C4C8',
        },
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
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
