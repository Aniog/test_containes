/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        cream: '#F5F0EA',
        'warm-black': '#1A1613',
        gold: {
          DEFAULT: '#C6A355',
          light: '#D4B96A',
          dark: '#A88B3D',
          muted: '#8B7355',
        },
        surface: '#FFFFFF',
        border: '#E8E2DA',
        'muted-text': '#6B6560',
        'warm-gray': '#9B9488',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'heading-lg': ['2.5rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'heading-md': ['1.75rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'product-name': ['0.85rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
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
