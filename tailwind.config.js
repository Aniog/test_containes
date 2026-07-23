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
        brand: {
          50:  '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe0d0',
          300: '#dcc9a8',
          400: '#c9a87a',
          500: '#b08d57',
          600: '#9a7544',
          700: '#7d5d38',
          800: '#664a30',
          900: '#4d3826',
        },
        // Deep charcoal base
        surface: {
          50:  '#f7f6f5',
          100: '#efeee9',
          200: '#e2dfd8',
          300: '#ccc8bc',
          400: '#9e9787',
          500: '#7a7264',
          600: '#5c564b',
          700: '#3d3a34',
          800: '#2a2723',
          900: '#1a1816',
          950: '#0f0e0d',
        },
        // Warm gold accent
        gold: {
          light: '#e8d5a3',
          DEFAULT: '#c9a87a',
          dark: '#9a7544',
          muted: '#b08d57',
        },
        // Cream / ivory
        ivory: {
          light: '#fdfcfa',
          DEFAULT: '#f9f6f0',
          warm: '#f3ede2',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.02em' }],
        'heading-1': ['3rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.15', letterSpacing: '0.015em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.5' }],
        'caption': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      borderWidth: {
        'hairline': '0.5px',
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
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
        'slide-out-right': 'slide-out-right 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
}
