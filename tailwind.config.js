/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#1A1514',
          50: '#F5EFE6',
          100: '#E8D5B0',
          200: '#C8A052',
          300: '#A0783C',
          400: '#6B4F2E',
          500: '#4A3620',
          600: '#3A2A18',
          700: '#2C1F12',
          800: '#1F160D',
          900: '#1A1514',
        },
        cream: {
          DEFAULT: '#FDF8F4',
          50: '#FFFDFC',
          100: '#FDF8F4',
          200: '#F5EFE6',
          300: '#E8DDD1',
          400: '#D4C4B3',
        },
        gold: {
          DEFAULT: '#C8A052',
          light: '#E8D5B0',
          dark: '#A0783C',
          muted: '#8B6F3A',
        },
        taupe: {
          DEFAULT: '#8B7E74',
          light: '#B8A99E',
          dark: '#6B5F56',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
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
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
