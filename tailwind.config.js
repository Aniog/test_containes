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
          50: '#FFFDF9',
          100: '#FEFCF5',
          200: '#FDF8EE',
          300: '#FAF3E4',
          400: '#F5EDD8',
          500: '#EDE4C8',
        },
        charcoal: {
          50: '#F5F4F3',
          100: '#E8E6E4',
          200: '#D1CECC',
          300: '#A8A29E',
          400: '#7A7670',
          500: '#5A5550',
          600: '#3D3A36',
          700: '#2D2926',
          800: '#1F1D1A',
          900: '#141210',
        },
        gold: {
          50: '#FFF9ED',
          100: '#FFF0D4',
          200: '#FFDEA8',
          300: '#F0C87A',
          400: '#D4A84E',
          500: '#C4A265',
          600: '#B8960B',
          700: '#957708',
          800: '#7A610B',
          900: '#664F0E',
        },
        stone: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          200: '#EBE8E3',
          300: '#DDD8D0',
          400: '#C4BDB3',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'super-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
