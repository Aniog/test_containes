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
          50: '#fefcf5',
          100: '#fcf7e6',
          200: '#f8edc4',
          300: '#f3df9b',
          400: '#ebc95e',
          500: '#e0b03a',
          600: '#c9942e',
          700: '#a77526',
          800: '#8a5f27',
          900: '#734e25',
        },
        ink: {
          50: '#f6f5f4',
          100: '#e7e5e4',
          200: '#d0cdcb',
          300: '#b0aba8',
          400: '#918a86',
          500: '#76706c',
          600: '#5f5a57',
          700: '#4d4947',
          800: '#413e3c',
          900: '#1a1817',
          950: '#0f0d0c',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f3d994',
          300: '#ecbf5c',
          400: '#e5a62e',
          500: '#d48d1f',
          600: '#b86e19',
          700: '#934f19',
          800: '#783f1c',
          900: '#66361c',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
