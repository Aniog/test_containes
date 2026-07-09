/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora color palette - quiet luxury
        cream: {
          50: '#fefdf8',
          100: '#fdf9ee',
          200: '#faf0d0',
          300: '#f5e4a8',
          400: '#ecd06a',
          500: '#e4bc4a',
          600: '#d4a63a',
          700: '#b0872e',
          800: '#8d6d28',
          900: '#6e5524',
        },
        charcoal: {
          50: '#f7f6f4',
          100: '#ebe8e3',
          200: '#d6d0c6',
          300: '#b8af9f',
          400: '#968b78',
          500: '#7a6e5d',
          600: '#635948',
          700: '#4e4538',
          800: '#3e3730',
          900: '#2d2925',
          950: '#1a1714',
        },
        gold: {
          light: '#d4a574',
          DEFAULT: '#b8956a',
          dark: '#8b6a42',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.04)',
        'premium': '0 4px 30px rgba(0, 0, 0, 0.08)',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
