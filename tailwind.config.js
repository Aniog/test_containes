/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#faf8f5',
          100: '#f0ece4',
          200: '#dfd6c6',
          300: '#c9b99e',
          400: '#b49c7a',
          500: '#a3845d',
          600: '#8b6e4d',
          700: '#735840',
          800: '#5f4939',
          900: '#523e32',
          950: '#2b211a',
        },
        ink: {
          50: '#f5f4f1',
          100: '#e8e5dd',
          200: '#d3cdbd',
          300: '#b9ae96',
          400: '#a19178',
          500: '#927e66',
          600: '#7e6a55',
          700: '#685647',
          800: '#574840',
          900: '#4c3e38',
          950: '#2d221e',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f3d994',
          300: '#ecbf5b',
          400: '#e7a830',
          500: '#df8e1f',
          600: '#c56e17',
          700: '#a44e17',
          800: '#863e1a',
          900: '#6e3419',
          950: '#401a0a',
        },
        cream: '#faf6f1',
        charcoal: '#1a1614',
      },
      letterSpacing: {
        'wide-lg': '0.15em',
        'wide-xl': '0.2em',
        'wide-2xl': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
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
