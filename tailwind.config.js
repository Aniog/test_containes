/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        ivory: '#FDF9F3',
        warmWhite: '#FFFEF9',
        charcoal: '#1C1C1C',
        deepCharcoal: '#141414',
        gold: {
          50: '#FDF8F0',
          100: '#F9EFDA',
          200: '#F2DFB5',
          300: '#E8C882',
          400: '#D4AF5A',
          500: '#C9A048',
          600: '#B8893A',
          700: '#9A6F30',
          800: '#7D5A2A',
          900: '#664826',
        },
        taupe: '#8B7D6B',
        warmGray: '#6B6460',
        lightTaupe: '#C9C2B8',
        blush: '#E8DDD4',
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
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
