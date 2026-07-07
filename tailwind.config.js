/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F6',
        parchment: '#F3EFE9',
        espresso: '#1E1814',
        cocoa: '#2C2420',
        taupe: '#6B5E57',
        stone: '#9A8F88',
        mist: '#E8E2DB',
        gold: {
          DEFAULT: '#B8956B',
          light: '#D4B88A',
          dark: '#8F7149',
        },
        blush: '#F5EDE6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-xl': '0.22em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
