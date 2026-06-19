/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        charcoal: '#1a1817',
        gold: '#c8a45c',
        'gold-light': '#dcc98a',
        'gold-dark': '#a6843c',
        warm: {
          50: '#fdfbf7',
          100: '#f7f1e8',
          200: '#ede0d0',
          300: '#dcc8ae',
          400: '#c8a45c',
          500: '#b8944a',
          600: '#a07d3c',
          700: '#846332',
          800: '#6b5029',
          900: '#574124',
        },
        ink: {
          50: '#f5f4f3',
          100: '#e6e4e1',
          200: '#cecbc7',
          300: '#aeaaa4',
          400: '#8c8780',
          500: '#726d66',
          600: '#5c5751',
          700: '#4a4641',
          800: '#3d3a36',
          900: '#1a1817',
          950: '#0f0e0d',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.28em',
        wider: '0.14em',
        wide: '0.08em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
