/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — warm luxury
        'velmora': {
          'black': '#1a1714',
          'charcoal': '#2c2824',
          'espresso': '#3d3530',
          'warm-gray': '#8a7e76',
          'sand': '#c8bfb4',
          'cream': '#f5f0eb',
          'ivory': '#faf8f5',
          'gold': '#b8963e',
          'gold-light': '#d4b062',
          'gold-dark': '#96742e',
          'rose': '#e8d5c4',
        },
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-1': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.2' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.6' }],
        'caption': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'pill': '9999px',
      },
      boxShadow: {
        'card': '0 2px 16px rgba(26, 23, 20, 0.06)',
        'card-hover': '0 8px 32px rgba(26, 23, 20, 0.1)',
        'drawer': '-4px 0 32px rgba(26, 23, 20, 0.12)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
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
        'fade-in': 'fade-in 0.6s ease-luxury forwards',
        'slide-in-right': 'slide-in-right 0.4s ease-luxury forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-luxury forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
