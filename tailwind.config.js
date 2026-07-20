/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8F0',
          100: '#F9EDD8',
          200: '#F0D9B1',
          300: '#E4C086',
          400: '#D4A25E',
          500: '#C9A96E',
          600: '#B8903A',
          700: '#9A7530',
          800: '#7D5F28',
          900: '#614A1F',
        },
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F5F0E8',
          300: '#EBE4D6',
          400: '#DDD2C0',
          500: '#CFC0A8',
        },
        stone: {
          950: '#1C1917',
          900: '#292524',
          800: '#3D3A37',
          700: '#57534E',
          600: '#78716C',
          500: '#A8A29E',
          400: '#C4BFBA',
          300: '#D6D3D1',
          200: '#E7E5E4',
          100: '#F5F5F4',
          50: '#FAFAF9',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading': ['2.5rem', { lineHeight: '1.15', letterSpacing: '0.03em' }],
        'subheading': ['1.75rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
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
