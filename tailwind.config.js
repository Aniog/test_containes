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
          dark: '#1f1c18',
          darker: '#161410',
          cream: '#f7f5f2',
          warm: '#efe9e1',
          sand: '#e6dfd5',
          gold: '#c9a86c',
          'gold-light': '#d9bc8e',
          'gold-dark': '#a4834e',
          muted: '#8a8178',
          stone: '#5c554d',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        wider: '0.12em',
      },
      transitionDuration: {
        '400': '400ms',
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
        fadeIn: 'fadeIn 0.7s ease-out forwards',
        shimmer: 'shimmer 2.5s infinite linear',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
