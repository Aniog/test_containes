/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F5EFE4',
          300: '#EDE3D1',
          400: '#E0D1B4',
          500: '#D4BE97',
        },
        warm: {
          50: '#F8F6F3',
          100: '#F0EDE7',
          200: '#E0D9CD',
          300: '#C5B9A5',
          400: '#A8987E',
          500: '#8C7B64',
          600: '#716251',
          700: '#5B4F42',
          800: '#4A4036',
          900: '#3D352D',
          950: '#1A1614',
        },
        gold: {
          50: '#FBF7EE',
          100: '#F5ECD3',
          200: '#EBD7A5',
          300: '#DFBE72',
          400: '#D4AB4E',
          500: '#C9A84C',
          600: '#A8833A',
          700: '#8B6530',
          800: '#74522D',
          900: '#634528',
          950: '#392414',
        },
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.15em',
        wide: '0.1em',
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
  plugins: [require("tailwindcss-animate")],
}
