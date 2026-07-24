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
          50: '#fefdfb',
          100: '#fdfaf6',
          200: '#f5f0ea',
          300: '#ebe3d8',
          400: '#d8cfc0',
        },
        walnut: {
          50: '#f5f3f1',
          100: '#e7e3df',
          200: '#d5cfc8',
          300: '#b5aca0',
          400: '#9a8e7e',
          500: '#827464',
          600: '#6b5d4e',
          700: '#534739',
          800: '#3d3329',
          900: '#292524',
          950: '#1c1917',
        },
        gold: {
          DEFAULT: '#b8963e',
          light: '#d4b668',
          muted: '#c5a55a',
          50: '#fdfaf0',
          100: '#f9f2d4',
          200: '#f0e2a8',
          300: '#e5cc71',
          400: '#d4b668',
          500: '#c5a55a',
          600: '#b8963e',
          700: '#9a7a32',
          800: '#7d6229',
          900: '#654f23',
        },
        rose: {
          light: '#f8ece8',
          DEFAULT: '#e8d5cc',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
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
