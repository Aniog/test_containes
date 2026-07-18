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
          100: '#f3efeb',
          200: '#e6ddd6',
          300: '#d4c5b8',
          400: '#bfa999',
          500: '#a88d7b',
          600: '#8e7262',
          700: '#755d50',
          800: '#5f4a40',
          900: '#1a1512',
          950: '#0f0c0a',
        },
        gold: {
          50: '#fdf9f0',
          100: '#f9efd8',
          200: '#f2ddb0',
          300: '#e9c67e',
          400: '#dfac4f',
          500: '#d4982e',
          600: '#c17d24',
          700: '#a06120',
          800: '#824e21',
          900: '#6b401e',
          950: '#3d210e',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f1',
          200: '#faf2e0',
          300: '#f5e7c8',
          400: '#eed8a8',
          500: '#e5c587',
          600: '#d9ad66',
          700: '#c4934b',
          800: '#a87a3f',
          900: '#8c6437',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
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
