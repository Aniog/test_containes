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
          'warm-black': '#1A1714',
          'warm-gray': '#6B6560',
          'warm-gray-light': '#9B9590',
          'warm-gray-lighter': '#C5BFB8',
          'warm-border': '#E5DFD6',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'subheading': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionDuration: {
        '500': '500ms',
        '700': '700ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
}
