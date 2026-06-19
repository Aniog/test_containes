/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — warm deep base, gold accents, editorial neutrals
        velvet: {
          50:  '#f8f7f5',
          100: '#f0ece6',
          200: '#e2dbd1',
          300: '#d0c5b5',
          400: '#bcaa93',
          500: '#ac957a',
          600: '#9f8469',
          700: '#856d58',
          800: '#6d5a4b',
          900: '#594a3f',
          950: '#2b231e',
        },
        gold: {
          50:  '#fdf9f0',
          100: '#f9efd7',
          200: '#f3ddaf',
          300: '#ebc67d',
          400: '#e2aa4a',
          500: '#d8952a',
          600: '#c07a20',
          700: '#9f5f1e',
          800: '#814b1f',
          900: '#6b3e1c',
          950: '#3a1f0c',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
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
