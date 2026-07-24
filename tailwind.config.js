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
        velmora: {
          50: '#fdf8f3',
          100: '#f9edde',
          200: '#f5dbb8',
          300: '#f0c48d',
          400: '#e8a85e',
          500: '#d98b3f',
          600: '#c06d30',
          700: '#9b5328',
          800: '#7a3f22',
          900: '#63351e',
        },
        gold: {
          light: '#D4AF37',
          DEFAULT: '#B8860B',
          dark: '#8B6914',
        },
        cream: '#FAF7F2',
        charcoal: '#1A1A1A',
        'charcoal-light': '#2D2D2D',
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
