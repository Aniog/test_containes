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
          300: '#ddd0b5',
          400: '#c9a96e',
          500: '#b8943d',
          600: '#a07d2e',
          700: '#8a6a28',
          800: '#6e5422',
          900: '#4a3817',
        },
        surface: {
          cream: '#faf8f5',
          warm: '#f5f0e8',
          ivory: '#fffef9',
          stone: '#ede5d4',
        },
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          medium: '#4a4a4a',
          muted: '#6b6b6b',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light: '#d4b87a',
          dark: '#b8943d',
          pale: '#f0e6d0',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '0.05em' }],
        'heading-1': ['2.75rem', { lineHeight: '1.15' }],
        'heading-2': ['2rem', { lineHeight: '1.2' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
        'overline': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
