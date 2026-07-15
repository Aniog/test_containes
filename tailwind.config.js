/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1B1B1B',
          light: '#2D2D2D',
          muted: '#4A4A4A',
        },
        cream: {
          DEFAULT: '#F7F3ED',
          dark: '#EDE7DE',
          light: '#FDFBF8',
        },
        gold: {
          DEFAULT: '#C9A962',
          light: '#D9C28A',
          dark: '#A6883F',
          muted: '#E8DEC4',
        },
        stone: {
          warm: '#B5A89A',
          deep: '#8C8074',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.22em',
        'super-wide': '0.35em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
