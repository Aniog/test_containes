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
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F5EDE3',
          300: '#EDE2D3',
          400: '#E0D0BA',
          500: '#C4AA82',
        },
        gold: {
          50: '#FFF9EB',
          100: '#FFF0CC',
          200: '#FFE099',
          300: '#FFD066',
          400: '#C9A96E',
          500: '#B8960F',
          600: '#8B7209',
          700: '#6B5707',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#9E9E9E',
          400: '#6B6B6B',
          500: '#4A4A4A',
          600: '#333333',
          700: '#1A1A1A',
          800: '#0D0D0D',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
