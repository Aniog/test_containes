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
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ede5d4',
          300: '#dfd0b5',
          400: '#c9ac7d',
          500: '#b8944f',
          600: '#a07a3a',
          700: '#856332',
          800: '#6e512d',
          900: '#5c4329',
          950: '#342314',
          gold: {
            light: '#d4b876',
            DEFAULT: '#c9ac7d',
            dark: '#a07a3a',
          },
        },
        gold: {
          light: '#d4b876',
          DEFAULT: '#c9ac7d',
          dark: '#a07a3a',
        },
        ivory: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e8',
          300: '#f5ead6',
        },
        'warm-white': '#fefdfb',
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#2d2d2d',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading': ['2.5rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'subheading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '2px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
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
        'slide-up': 'slide-up 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.35s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
}
