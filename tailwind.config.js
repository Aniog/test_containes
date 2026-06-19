/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm deep base
        deep: {
          50:  '#f7f5f0',
          100: '#ede8db',
          200: '#dbd1bc',
          300: '#c5b698',
          400: '#b29d78',
          500: '#a48a65',
          600: '#8d7357',
          700: '#735b48',
          800: '#5f4b3e',
          900: '#4e3e35',
          950: '#2c211c',
        },
        // Warm gold accent
        gold: {
          50:  '#fdfaef',
          100: '#faf2d9',
          200: '#f4e2b3',
          300: '#eccd82',
          400: '#e3b550',
          500: '#dba030',
          600: '#cc8125',
          700: '#a96322',
          800: '#8a4f23',
          900: '#734120',
          950: '#3f2210',
        },
        // Soft cream / warm-neutral
        cream: {
          50:  '#fefdfb',
          100: '#fdf9f3',
          200: '#faf1e6',
          300: '#f6e8d3',
          400: '#f0d9bb',
          500: '#e8c7a3',
          600: '#d9a87f',
          700: '#c0885e',
          800: '#a06f4b',
          900: '#845b40',
          950: '#483022',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.15em',
        widest: '0.25em',
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
