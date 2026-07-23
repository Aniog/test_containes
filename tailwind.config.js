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
          100: '#FBF7EF',
          200: '#F5EDDA',
          300: '#EDE0C0',
          400: '#E0CDA0',
          500: '#D4B880',
          600: '#C4A265',
          700: '#A8874A',
          800: '#8B6E3A',
          900: '#6E5630',
        },
        warm: {
          50: '#FAF8F6',
          100: '#F5F0EB',
          200: '#EBE1D5',
          300: '#D9C9B5',
          400: '#C4AD92',
          500: '#B09373',
          600: '#9B7D5E',
          700: '#81664B',
          800: '#6B5540',
          900: '#564437',
        },
        charcoal: {
          50: '#F5F4F3',
          100: '#E8E6E3',
          200: '#D2CFC9',
          300: '#B2ADA4',
          400: '#928C81',
          500: '#7A7468',
          600: '#696258',
          700: '#565049',
          800: '#3D3833',
          900: '#2C2824',
          950: '#1A1714',
        },
        gold: {
          50: '#FDF9F0',
          100: '#F9F0DB',
          200: '#F2DFB3',
          300: '#E9C97F',
          400: '#DFB04E',
          500: '#D49A2C',
          600: '#B87D22',
          700: '#96601E',
          800: '#7B4D1F',
          900: '#66401E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
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
