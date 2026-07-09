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
        cream: '#FDF9F3',
        warm: {
          50: '#FAF7F2',
          100: '#F3EDE4',
          200: '#E8DFD4',
          300: '#D4C8B8',
          400: '#9C8B7A',
          500: '#6B5B4E',
          600: '#4A3D33',
          700: '#2C2420',
          800: '#1A1410',
          900: '#0D0A08',
        },
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A843',
          muted: '#C5A55A',
          dark: '#8B6914',
          50: '#FDF8E8',
          100: '#F9EDC8',
          200: '#F0D98A',
          300: '#E5C24D',
          400: '#D4A843',
          500: '#B8860B',
          600: '#9A7209',
          700: '#7C5C07',
          800: '#5E4506',
          900: '#3F2F04',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
