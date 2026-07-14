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
          black: '#1A1A1A',
          charcoal: '#2A2A28',
          carbon: '#3A3A38',
          stone: '#A89F94',
          mist: '#C8C0B4',
          cream: '#F5F0EB',
          ivory: '#FAF7F3',
          gold: '#C5A059',
          'gold-light': '#D4B070',
          'gold-dark': '#A8873F',
          rose: '#B8867A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.03em' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.15', letterSpacing: '0.03em' }],
        'heading-md': ['1.75rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
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
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
