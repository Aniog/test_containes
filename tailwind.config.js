/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F0E8',
          300: '#EDE5D8',
        },
        gold: {
          50: '#FBF7EE',
          100: '#F5ECD5',
          200: '#EADBAC',
          300: '#D4B96A',
          400: '#C8A84E',
          500: '#B8942E',
          600: '#9A7A24',
          700: '#7A601C',
          800: '#5C4815',
          900: '#3E300E',
        },
        charcoal: {
          50: '#F5F5F4',
          100: '#E8E6E3',
          200: '#D1CDC7',
          300: '#B5AFA6',
          400: '#8A8278',
          500: '#6B6358',
          600: '#524B42',
          700: '#3D382F',
          800: '#2A2620',
          900: '#1A1815',
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
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
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
