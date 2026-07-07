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
        bronze: {
          50: '#FBF8F2',
          100: '#F5EFE4',
          200: '#E8DCC8',
          300: '#D4C4A8',
          400: '#C8A96E',
          500: '#B8944F',
          600: '#A07C3F',
          700: '#856436',
          800: '#6E5230',
          900: '#2C2416',
          950: '#1A1410',
        },
        gold: {
          400: '#D4B87A',
          500: '#C8A96E',
          600: '#B8944F',
        },
        taupe: {
          400: '#A89888',
          500: '#8B7E74',
          600: '#6E6259',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
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
