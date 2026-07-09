/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep charcoal base
        velmora: {
          950: '#0f0e0d',
          900: '#181818',
          800: '#1f1e1c',
          700: '#2a2826',
          600: '#3a3835',
          500: '#5c5854',
          400: '#8c8580',
          300: '#b0a89f',
          200: '#d4cdc5',
          100: '#eae5df',
          50:  '#faf7f4',
        },
        // Warm antique gold accent
        gold: {
          DEFAULT: '#c4a265',
          light: '#d4b97a',
          dark: '#a68845',
          muted: '#c4a2651a',
        },
        // Cream surfaces
        cream: {
          DEFAULT: '#faf7f4',
          warm: '#f5f0ea',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading-1': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.2' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'overline': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.15em' }],
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
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'slide-out-right': 'slide-out-right 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
