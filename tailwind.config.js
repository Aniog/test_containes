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
          50: '#FFFDF9',
          100: '#FFF8F0',
          200: '#F5EDE0',
          300: '#E8DCC8',
        },
        charcoal: {
          800: '#2C2C2C',
          900: '#1A1A1A',
          950: '#0D0D0D',
        },
        gold: {
          50: '#FDF8EF',
          100: '#F9EDDA',
          200: '#F0D9B3',
          300: '#E5C18A',
          400: '#D4A45E',
          500: '#C9983E',
          600: '#B8862E',
          700: '#996A24',
          800: '#7D5522',
          900: '#674720',
        },
        warmgray: {
          50: '#FAF9F7',
          100: '#F3F1ED',
          200: '#E8E4DD',
          300: '#D4CFC5',
          400: '#B8B0A3',
          500: '#9C9488',
          600: '#837A6D',
          700: '#6B645B',
          800: '#57534D',
          900: '#494640',
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
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
