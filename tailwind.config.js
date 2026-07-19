/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcfa',
          100: '#faf8f5',
          200: '#f5f1eb',
          300: '#efe9e0',
        },
        ink: {
          DEFAULT: '#1f1c18',
          light: '#2d2924',
        },
        warmgray: {
          400: '#9a928a',
          500: '#6b6560',
          600: '#59534e',
        },
        gold: {
          DEFAULT: '#bfa15f',
          dark: '#a68a4d',
          light: '#d4b978',
          50: '#fbf8f1',
        },
        hairline: '#e6e0d8',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
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
      },
    },
  },
  plugins: [],
}
