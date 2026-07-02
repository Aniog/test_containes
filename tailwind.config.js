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
          base: '#2C2420',
          cream: '#F7F3EE',
          'cream-dark': '#EDE6DE',
          gold: '#B8944C',
          'gold-light': '#D4B46A',
          'gold-dark': '#8F6E2F',
          taupe: '#8C7B6F',
          'warm-gray': '#A79B91',
          blush: '#E8DCD4',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.22em',
        'widest-2xl': '0.28em',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(44, 36, 32, 0.08)',
        'soft-lg': '0 16px 48px rgba(44, 36, 32, 0.12)',
        'glow': '0 0 0 1px rgba(184, 148, 76, 0.35)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s luxury forwards',
        'fade-in': 'fade-in 0.5s luxury forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
