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
          100: '#fdf9f3',
          200: '#faf0e3',
          300: '#f4e2c9',
          400: '#ebd0a8',
          500: '#e0b884',
        },
        gold: {
          50: '#fefcf3',
          100: '#fdf6e3',
          200: '#fae8c4',
          300: '#f5d49a',
          400: '#efc06e',
          500: '#e8b04a',
          600: '#d4992e',
          700: '#b07d24',
          800: '#8c641e',
          900: '#6f4f18',
        },
        charcoal: {
          50: '#f7f6f5',
          100: '#ebe9e7',
          200: '#d6d2ce',
          300: '#b8b2ab',
          400: '#968e85',
          500: '#7a7168',
          600: '#625a52',
          700: '#4e4740',
          800: '#3f3933',
          900: '#2d2824',
          950: '#1a1613',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.04)',
        'premium': '0 4px 40px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
