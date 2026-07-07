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
          DEFAULT: '#1B1816',
          light: '#2D2825',
        },
        cream: {
          DEFAULT: '#F8F5F1',
          dark: '#EDE8E2',
        },
        sand: '#E6E0D8',
        gold: {
          DEFAULT: '#B9935F',
          light: '#D4B88A',
          dark: '#8F6E3E',
        },
        taupe: '#A79A8E',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.2em',
        wider: '0.08em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
