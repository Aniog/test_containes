/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep base tones
        'velvet': {
          50: '#faf8f6',
          100: '#f3efeb',
          200: '#e6ddd5',
          300: '#d4c7b8',
          400: '#bfa994',
          500: '#a88e76',
          600: '#8d7260',
          700: '#6e5a4c',
          800: '#524440',
          900: '#2d2624',
          950: '#1a1614',
        },
        // Gold accent
        'gold': {
          50: '#fdfaf3',
          100: '#f9f0db',
          200: '#f2deb5',
          300: '#e9c785',
          400: '#dfaa52',
          500: '#d4922e',
          600: '#c07a22',
          700: '#9f5f1d',
          800: '#814d1f',
          900: '#6a401e',
          950: '#3b200e',
        },
        // Warm cream for backgrounds
        'ivory': {
          50: '#fefdfb',
          100: '#fcf9f3',
          200: '#f8f2e8',
          300: '#f0e5d3',
          400: '#e5d2b5',
          500: '#d6ba93',
        },
        // Rich charcoal for text
        'obsidian': {
          DEFAULT: '#1a1614',
          light: '#3d3632',
          muted: '#6b5f57',
        },
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
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
