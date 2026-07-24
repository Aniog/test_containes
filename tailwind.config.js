/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          50:  '#faf8f5',
          100: '#f3efe8',
          200: '#e6ddd0',
          300: '#d4c6b3',
          400: '#bfa98f',
          500: '#a68b6e',
          600: '#8c7259',
          700: '#735b48',
          800: '#5c483a',
          900: '#3f3228',
          950: '#2b201a',
        },
        gold: {
          50:  '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d9b6',
          300: '#e8bf87',
          400: '#dca05a',
          500: '#d4893a',
          600: '#c4712f',
          700: '#a35929',
          800: '#844828',
          900: '#6c3c23',
          950: '#3a1e11',
        },
        warm: {
          50:  '#fefbf6',
          100: '#fef7ec',
          200: '#fdedd3',
          300: '#fbdfb0',
          400: '#f8cc81',
          500: '#f5b751',
          600: '#f2a02e',
          700: '#e4871a',
          800: '#bd6717',
          900: '#9a521a',
        },
        cream: '#FDFBF7',
        sand: '#F5F0E8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.12em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
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
