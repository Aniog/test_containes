/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette
        'velmora': {
          'black': '#111111',
          'charcoal': '#1a1a1a',
          'dark': '#2a2a2a',
          'graphite': '#3a3a3a',
          'slate': '#5a5a5a',
          'muted': '#8a8a8a',
          'silver': '#b0b0b0',
          'light': '#e8e4de',
          'cream': '#f5f1eb',
          'ivory': '#faf7f2',
          'white': '#fdfcfa',
          'gold': '#c9a96e',
          'gold-light': '#d4bb8a',
          'gold-dark': '#b8944f',
          'gold-muted': 'rgba(201, 169, 110, 0.15)',
        },
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.15' }],
        'heading-md': ['1.75rem', { lineHeight: '1.2' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.5' }],
        'caption': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'nav': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
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
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-in forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
