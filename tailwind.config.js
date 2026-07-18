/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream: '#F7F4F0',
          espresso: '#2A211D',
          charcoal: '#3F332C',
          gold: '#B8860B',
          'gold-light': '#D4A845',
          taupe: '#6B5E55',
          sand: '#E9E2D9',
          hairline: '#DED6CD',
          white: '#FFFFFF',
          error: '#B54A4A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.1em',
        widest: '0.2em',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
        '9/16': '9 / 16',
        '16/9': '16 / 9',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        shimmer: 'shimmer 2s infinite linear',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(42, 33, 29, 0.08)',
        lift: '0 12px 40px rgba(42, 33, 29, 0.12)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
