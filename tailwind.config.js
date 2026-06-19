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
          50: '#FEFCF9',
          100: '#FAF8F5',
          200: '#F5F0E8',
          300: '#EBE3D5',
        },
        gold: {
          300: '#E2CB9D',
          400: '#D4B886',
          500: '#C9A96E',
          600: '#B8934F',
          700: '#9A7A3F',
        },
        charcoal: {
          50: '#6B6B6B',
          100: '#4A4A4A',
          200: '#3A3A3A',
          300: '#2A2522',
          400: '#1A1A1A',
          500: '#111111',
        },
        taupe: {
          500: '#8B7355',
          600: '#7A6548',
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
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
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
