/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C9A96E',
          'gold-light': '#D4BA85',
          'gold-dark': '#B8944F',
          cream: '#F5F0E8',
          'cream-dark': '#EDE5D8',
          charcoal: '#1A1A1A',
          'warm-gray': '#6B6358',
          'light-gray': '#F8F6F3',
          'mid-gray': '#D4CFC6',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'heading-1': ['3rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'heading-2': ['2rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
