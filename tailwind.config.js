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
          'black': '#0F0F0F',
          'charcoal': '#1A1A1A',
          'dark': '#242424',
          'gray': '#3A3A3A',
          'muted': '#6B6B6B',
          'light': '#B8B8B8',
          'cream': '#F5F0EB',
          'ivory': '#FAF8F5',
          'white': '#FEFCFA',
          'gold': '#C9A96E',
          'gold-light': '#D4BC8A',
          'gold-dark': '#A68B5B',
          'rose': '#E8D5C4',
        },
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-lg': ['2.5rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'heading-md': ['1.75rem', { lineHeight: '1.2', letterSpacing: '0.015em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.6' }],
        'caption': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderWidth: {
        'hairline': '0.5px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      boxShadow: {
        'product': '0 4px 20px rgba(0,0,0,0.08)',
        'product-hover': '0 8px 32px rgba(0,0,0,0.12)',
        'elevated': '0 12px 40px rgba(0,0,0,0.15)',
        'drawer': '0 0 60px rgba(0,0,0,0.2)',
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
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
