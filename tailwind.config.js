/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1A1714',
        ivory: '#FAF7F2',
        champagne: '#C9A96E',
        'champagne-light': '#E8D5A3',
        'champagne-dark': '#A8854A',
        stone: {
          50: '#FDFCFA',
          100: '#F5F1EB',
          200: '#E8E0D5',
          300: '#D4C9B8',
          400: '#B8A898',
          500: '#8C7B6B',
          600: '#6B5C4E',
          700: '#4A3F35',
          800: '#2E261E',
          900: '#1A1714',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.12em',
        product: '0.15em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
        slideInLeft: 'slideInLeft 0.35s ease-out forwards',
        shimmer: 'shimmer 2s infinite linear',
      },
    },
  },
  plugins: [],
}
