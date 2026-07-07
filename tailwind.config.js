/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a1612',
        'warm-white': '#faf8f5',
        champagne: '#e9dfd1',
        gold: '#c9a86c',
        'gold-hover': '#b08b55',
        rose: '#d8c8bc',
        stone: '#8a817a',
        line: '#e0d8ce',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.18em',
        wide: '0.12em',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'slow-pan': 'slowPan 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowPan: {
          '0%': { transform: 'scale(1.05) translateX(0)' },
          '50%': { transform: 'scale(1.05) translateX(-2%)' },
          '100%': { transform: 'scale(1.05) translateX(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
