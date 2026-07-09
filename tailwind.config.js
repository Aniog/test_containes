/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#1A1613',
          light: '#2A2420',
          lighter: '#3A342F',
        },
        cream: {
          DEFAULT: '#FAF6F1',
          dark: '#F0EBE3',
          darker: '#E5DDD3',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4B882',
          lighter: '#EBDAB3',
          dark: '#B89555',
          darker: '#A07B3A',
        },
        muted: '#6B5E50',
        border: '#E5DDD3',
        star: '#C9A96E',
        rose: {
          DEFAULT: '#D97B6C',
          light: '#E6A498',
          dark: '#C75847',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
        'widest-3xl': '0.3em',
      },
      borderRadius: {
        'card': '8px',
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(26,22,19,0.06)',
        'card-hover': '0 8px 32px rgba(26,22,19,0.12)',
        'drawer': '0 0 40px rgba(26,22,19,0.15)',
        'elevated': '0 12px 40px rgba(26,22,19,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
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
