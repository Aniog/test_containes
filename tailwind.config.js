/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep charcoal/ink base
        'velmora': {
          black: '#1a1714',
          dark: '#2a2520',
          charcoal: '#3d3630',
          stone: '#8c7e72',
          sand: '#c4b5a4',
          cream: '#f5f0ea',
          ivory: '#faf8f5',
          white: '#ffffff',
        },
        // Warm gold accent
        'gold': {
          DEFAULT: '#c9a96e',
          light: '#dcc28e',
          dark: '#a8893e',
          muted: '#e8dcc8',
        },
        // Muted rose/blush accent
        'blush': {
          DEFAULT: '#d4a69a',
          light: '#e8ccc4',
        },
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-lg': ['2rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'heading-md': ['1.5rem', { lineHeight: '1.2', letterSpacing: '0.015em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
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
