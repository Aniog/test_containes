/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          50: '#faf8f5',
          100: '#f3ede5',
          200: '#e6d8c3',
          300: '#d4b98e',
          400: '#c4a06a',
          500: '#b88a52',
          600: '#a67445',
          700: '#8a5c3c',
          800: '#704b35',
          900: '#5c3f2e',
          950: '#1c1410',
        },
        warm: {
          50: '#fdfbf7',
          100: '#f9f3e5',
          200: '#f2e4c2',
          300: '#e8cf95',
          400: '#ddb66b',
          500: '#d4a34d',
          600: '#c48c41',
          700: '#a37037',
          800: '#855a32',
          900: '#6c4a2c',
        },
        sand: {
          50: '#fafaf8',
          100: '#f2f0eb',
          200: '#e6e2d9',
          300: '#d4cdbd',
          400: '#bfb59f',
          500: '#aca087',
          600: '#9a8c72',
          700: '#7d715e',
          800: '#665c4f',
          900: '#544c42',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.12em',
        wide: '0.06em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
