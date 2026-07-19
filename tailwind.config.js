/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep warm base
        velvet: {
          50: '#faf8f6',
          100: '#f5f0eb',
          200: '#e8dfd5',
          300: '#d4c4b0',
          400: '#bfa48a',
          500: '#a98a6d',
          600: '#9a7660',
          700: '#7d5e4e',
          800: '#5e4538',
          900: '#3d2e25',
          950: '#1a1410',
        },
        // Gold accent
        gold: {
          50: '#fdf9ef',
          100: '#faf0d4',
          200: '#f4dea8',
          300: '#ecc771',
          400: '#e4ac42',
          500: '#d4942b',
          600: '#c07a20',
          700: '#9d5d1b',
          800: '#804a1d',
          900: '#6a3e1c',
          950: '#3d1f0c',
        },
        // Cream/warm white
        ivory: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e4',
          300: '#f5e7cf',
          400: '#eed7b3',
          500: '#e4c291',
        },
        // Rich charcoal for text
        onyx: {
          50: '#f6f5f4',
          100: '#e7e5e3',
          200: '#d1ccc8',
          300: '#b3aca5',
          400: '#918880',
          500: '#766d65',
          600: '#635b54',
          700: '#524c46',
          800: '#46413c',
          900: '#3d3935',
          950: '#1c1a18',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
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
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e4ac42, #f4dea8, #e4ac42)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
