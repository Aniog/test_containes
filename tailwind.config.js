/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-left': 'slideLeft 0.35s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      colors: {
        cream: '#faf8f5',
        espresso: '#2c2420',
        gold: '#b8863a',
        'gold-light': '#d4a853',
        'gold-dark': '#9a6d2c',
        charcoal: '#1e1b18',
        'warm-gray': '#5c5348',
        'warm-border': '#e5e0d8',
        'warm-muted': '#9c8b7c',
        stone: '#f5f0ea',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.12em',
        wider: '0.2em',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
