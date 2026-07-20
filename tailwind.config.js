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
          100: '#f5f0ea',
          200: '#ebe0d2',
          300: '#dcc9b0',
          400: '#c9a985',
          500: '#b88e64',
          600: '#aa7a52',
          700: '#8e6344',
          800: '#73513b',
          900: '#5e4333',
          950: '#322219',
        },
        gold: {
          50: '#fdfaf0',
          100: '#faf3db',
          200: '#f4e5b5',
          300: '#edd086',
          400: '#e5b44e',
          500: '#dd9d2a',
          600: '#c9831e',
          700: '#a7651b',
          800: '#88501d',
          900: '#70421c',
          950: '#41220c',
        },
        warm: {
          50: '#fdfbf9',
          100: '#faf5ef',
          200: '#f4e9db',
          300: '#ebd6c0',
          400: '#dfbd9d',
          500: '#d3a47e',
          600: '#c28b64',
          700: '#a37154',
          800: '#855d48',
          900: '#6d4d3e',
          950: '#3a2720',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#3d3d3d',
          900: '#2a2a2a',
          950: '#1a1a1a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
