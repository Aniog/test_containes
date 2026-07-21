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
          cream: '#FAF7F2',
          ivory: '#F5F0E8',
          sand: '#E8DFD0',
          gold: '#C9A96E',
          'gold-light': '#D4BA8A',
          'gold-dark': '#A88B52',
          charcoal: '#2C2C2C',
          'warm-gray': '#6B6560',
          'cool-gray': '#9B9590',
          'soft-gray': '#D4CEC7',
          black: '#1A1A1A',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'wide': '0.15em',
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display': ['2.75rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading': ['1.5rem', { lineHeight: '1.3' }],
        'subheading': ['1.125rem', { lineHeight: '1.4' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
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
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
