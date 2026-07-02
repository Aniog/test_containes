/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a1818',
        'ink-soft': '#2d2a27',
        cream: '#f7f3ed',
        'cream-dark': '#efe9e1',
        'cream-muted': '#dcd4c8',
        gold: '#c5a06d',
        'gold-dark': '#b08a55',
        'gold-light': '#d9bc94',
        stone: '#8c8277',
        'stone-light': '#b0a79d',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        wider: '0.12em',
        wide: '0.06em',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.35s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
