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
          cream: '#FDFBF7',
          ivory: '#F8F4EE',
          linen: '#F0EBE3',
          sand: '#E8E0D4',
          taupe: '#78716C',
          stone: '#57534E',
          charcoal: '#292524',
          espresso: '#1C1917',
          gold: '#B08D57',
          'gold-light': '#C9A96E',
          'gold-dark': '#8B6F3E',
          'gold-muted': '#D4C5A0',
        },
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-1': ['2.75rem', { lineHeight: '1.15' }],
        'heading-2': ['2rem', { lineHeight: '1.2' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        'elevated': '0 10px 40px -10px rgba(0,0,0,0.1)',
        'product': '0 4px 20px -4px rgba(0,0,0,0.08)',
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
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
