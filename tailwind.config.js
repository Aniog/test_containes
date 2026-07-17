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
          50: '#FFFEF9',
          100: '#FFFDF5',
          200: '#FFF9E6',
          300: '#FFF5D6',
          400: '#FAECD3',
          500: '#F5E6CC',
        },
        charcoal: {
          800: '#2D2926',
          900: '#1A1816',
          950: '#0F0E0D',
        },
        gold: {
          50: '#FFF9E6',
          100: '#FFF0C2',
          200: '#FFE299',
          300: '#FFD466',
          400: '#E6B84D',
          500: '#D4A84B',
          600: '#C49435',
          700: '#A67830',
          800: '#8B6429',
          900: '#735222',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'extra-wide': '0.15em',
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
  plugins: [],
}
