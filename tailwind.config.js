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
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F3ECDA',
          300: '#EDE3C8',
          400: '#E5D7AF',
          500: '#D9C899',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#A3A3A3',
          400: '#737373',
          500: '#404040',
          600: '#2D2D2D',
          700: '#1F1F1F',
          800: '#141414',
          900: '#0A0A0A',
        },
        gold: {
          50: '#FFF9EC',
          100: '#FFF0D0',
          200: '#FFE0A0',
          300: '#FFD070',
          400: '#FFC140',
          500: '#C8A04D',
          600: '#B8923D',
          700: '#9A7A30',
          800: '#7C6226',
          900: '#5E4A1C',
        },
        rose: {
          50: '#FFF5F5',
          100: '#FFE8E8',
          200: '#FFD0D0',
          300: '#FFB8B8',
          400: '#E8999C',
          500: '#D4787C',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.04em' }],
        'heading-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.03em' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.15', letterSpacing: '0.03em' }],
        'heading-md': ['1.75rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
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
