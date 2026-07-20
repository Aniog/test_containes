/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep warm charcoal base
        'velvet': {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ebe8e2',
          300: '#d6d0c5',
          400: '#b8ae9f',
          500: '#9a8e7d',
          600: '#7d7163',
          700: '#665c50',
          800: '#554d44',
          900: '#2c2622',
          950: '#1a1614',
        },
        // Warm gold accent
        'gilded': {
          50: '#fefdf8',
          100: '#fdf9e8',
          200: '#faf0c5',
          300: '#f5e298',
          400: '#eece64',
          500: '#e4b83d',
          600: '#c99a2e',
          700: '#a87826',
          800: '#8a5f24',
          900: '#724e22',
          950: '#422a0f',
        },
        // Rose gold accent
        'blush': {
          50: '#fdf8f6',
          100: '#f9ede7',
          200: '#f3ddd2',
          300: '#eac7b3',
          400: '#dea98d',
          500: '#d48e6e',
          600: '#c47557',
          700: '#a4604a',
          800: '#875041',
          900: '#704439',
          950: '#3c211c',
        },
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading': ['2.5rem', { lineHeight: '1.15', letterSpacing: '0.03em' }],
        'subheading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.06em' }],
        'overline': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.14em' }],
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
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 40px -10px rgba(26, 22, 20, 0.15)',
        'glow': '0 0 20px rgba(228, 184, 61, 0.15)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
