/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fdfcfa',
          100: '#faf7f2',
          200: '#f5f0e8',
          300: '#ede5d8',
          400: '#e0d5c3',
        },
        ink: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#b0b0b0',
          300: '#808080',
          400: '#505050',
          500: '#333333',
          600: '#2a2a2a',
          700: '#1f1f1f',
          800: '#151515',
          900: '#0a0a0a',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcf',
          200: '#f2d89e',
          300: '#e8bf63',
          400: '#d4a643',
          500: '#c5953a',
          600: '#a87530',
          700: '#8b582b',
          800: '#734729',
          900: '#603b25',
        },
        rose: {
          50: '#fdf5f3',
          100: '#fce8e3',
          200: '#fad5cc',
          300: '#f5b8a8',
          400: '#ec9177',
          500: '#df6d4f',
          600: '#cb5336',
          700: '#aa422a',
          800: '#8d3a27',
          900: '#753526',
        },
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'subheading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
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
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
