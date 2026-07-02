/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          dark: '#0F0F0F',
          charcoal: '#1A1A1A',
          warm: '#2A2520',
          cream: '#FAF7F2',
          sand: '#F0EBE3',
          gold: '#C9A962',
          'gold-light': '#D4BC7E',
          'gold-dark': '#A88B3E',
          stone: '#8A8279',
          muted: '#B5ADA3',
          border: '#E8E2DA',
          divider: '#D4C5B0',
        }
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
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
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
    },
  },
  plugins: [],
}
