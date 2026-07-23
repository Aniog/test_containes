/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        'warm-white': '#F5F2ED',
        espresso: '#1A1817',
        taupe: '#8B7E74',
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A843',
          dark: '#9A6F0A',
          pale: '#F5E6C8',
        },
        rose: '#F0EBE6',
        border: '#E8E2D9',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'super-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'reveal': 'reveal 0.7s ease-out both',
        'stagger-1': 'reveal 0.55s ease-out 0.08s both',
        'stagger-2': 'reveal 0.55s ease-out 0.16s both',
        'stagger-3': 'reveal 0.55s ease-out 0.24s both',
        'stagger-4': 'reveal 0.55s ease-out 0.32s both',
        'stagger-5': 'reveal 0.55s ease-out 0.40s both',
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
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
