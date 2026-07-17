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
          50: '#FEFCF8',
          100: '#FBF8F3',
          200: '#F5EEE0',
          300: '#EDE0CC',
          400: '#E0CEB0',
          500: '#D4BC94',
          600: '#C4A67A',
          700: '#B08E5E',
          800: '#9A784A',
          900: '#7A5E3A',
        },
        gold: {
          50: '#FDF8F0',
          100: '#F9EDD6',
          200: '#F2D9A8',
          300: '#E8C47A',
          400: '#D9AE55',
          500: '#C9A96E',
          600: '#B8944A',
          700: '#9A7A38',
          800: '#7A5E2E',
          900: '#5C4422',
        },
        clay: {
          50: '#F7F4F0',
          100: '#EDE6DC',
          200: '#D9CBB8',
          300: '#C5AF94',
          400: '#B19470',
          500: '#9D7A56',
          600: '#7A5E3E',
          700: '#5C442E',
          800: '#3E2E20',
          900: '#2A1E14',
        },
        warm: {
          50: '#FDFCFA',
          100: '#FAF7F0',
          200: '#F0E8D8',
          300: '#E0D4BC',
          400: '#C8B89A',
          500: '#B09C7A',
          600: '#8A7A5E',
          700: '#6A5A42',
          800: '#4A3E2E',
          900: '#2A241E',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-xl': '0.15em',
        'wide-2xl': '0.2em',
        'wide-3xl': '0.25em',
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
