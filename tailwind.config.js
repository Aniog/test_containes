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
        brand: {
          50: '#faf8f5',
          100: '#f5efe6',
          200: '#ede5d8',
          300: '#d4cbb8',
          400: '#b8a88a',
          500: '#a69570',
          600: '#8a7a5a',
          700: '#6b5f47',
          800: '#4a4235',
          900: '#2a2520',
          950: '#1a1714',
        },
        gold: {
          light: '#d4b87a',
          DEFAULT: '#c9a96e',
          dark: '#b89b5e',
        },
        surface: {
          primary: '#0f0d0a',
          secondary: '#1a1714',
          tertiary: '#252218',
          card: '#1e1b16',
        },
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
