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
          50: '#fbfaf8',
          100: '#f6f3ef',
          200: '#ede7de',
          300: '#e3d9cc',
        },
        espresso: {
          900: '#12100e',
          800: '#1a1714',
          700: '#2a2520',
          600: '#4a4239',
        },
        gold: {
          DEFAULT: '#bfa06b',
          light: '#d4b87e',
          dark: '#9a7d4f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
