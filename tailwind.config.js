/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        'serif-alt': ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          dark: '#1A1614',
          slate: '#2D2823',
          taupe: '#8A7D72',
          ivory: '#F5F0EB',
          'warm-light': '#EDE6DC',
          gold: '#C9A96E',
          'gold-dark': '#B8944F',
          white: '#FFFFFF',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'slide-in-right': 'slideInRight 0.3s ease forwards',
        'slide-out-right': 'slideOutRight 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}
