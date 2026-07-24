/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        cream: '#F5F0E8',
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4B86A',
          dark: '#A88B3D',
          muted: '#E8D9A0',
        },
        charcoal: '#1A1410',
        'warm-gray': {
          DEFAULT: '#6B5E50',
          light: '#9A8E80',
        },
        divider: '#E8E0D4',
        'deep-dark': '#0F0C08',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'heading-xl': ['2.75rem', { lineHeight: '1.1', letterSpacing: '0.015em' }],
        'heading-lg': ['2rem', { lineHeight: '1.15', letterSpacing: '0.01em' }],
        'heading-md': ['1.5rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0.005em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-in',
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
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
