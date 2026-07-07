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
          DEFAULT: '#FBF8F4',
          50: '#FDFBFA',
          100: '#FBF8F4',
          200: '#F5EDE3',
          300: '#EDDFCF',
        },
        truffle: {
          DEFAULT: '#2C2420',
          50: '#F5F3F2',
          100: '#E8E4E1',
          200: '#CEC7C2',
          300: '#A89F99',
          400: '#827771',
          500: '#5C524C',
          600: '#4A403B',
          700: '#3B322E',
          800: '#2C2420',
          900: '#1A1513',
        },
        gold: {
          DEFAULT: '#C8A96E',
          50: '#FBF7F0',
          100: '#F4ECD9',
          200: '#E9D9B3',
          300: '#DCC28A',
          400: '#D0AE6B',
          500: '#C8A96E',
          600: '#B8944F',
          700: '#9A7A3E',
          800: '#7D6334',
          900: '#66512D',
        },
        blush: {
          DEFAULT: '#D4A99C',
          light: '#E8CFC7',
          pale: '#F5EAE6',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.15em',
        wider: '0.25em',
        widest: '0.35em',
      },
      screens: {
        xs: '480px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'slide-out-right': 'slideOutRight 0.4s ease-in',
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
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
