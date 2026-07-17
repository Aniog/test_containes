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
          50: '#faf8f6',
          100: '#f3eeea',
          200: '#e8ddd3',
          300: '#d9c6b4',
          400: '#c8a890',
          500: '#ba8e72',
          600: '#ad7a60',
          700: '#906650',
          800: '#765546',
          900: '#62473c',
          950: '#34241e',
        },
        warm: {
          50: '#fefdfb',
          100: '#fdf9f1',
          200: '#faf1df',
          300: '#f5e5c4',
          400: '#efd4a0',
          500: '#e7bf78',
          600: '#dca653',
          700: '#cc8f3c',
          800: '#b07532',
          900: '#945f2c',
          950: '#7a4a23',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        extra: '0.28em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.35s ease-out',
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
