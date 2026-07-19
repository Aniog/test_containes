/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          ivory: '#F7F1E8',
          porcelain: '#FFFBF4',
          stone: '#E8DCCC',
          espresso: '#211812',
          cocoa: '#4B3529',
          taupe: '#7A685C',
          gold: '#C49A55',
          antique: '#9B7441',
          blush: '#D8BBA6',
          line: '#D8C9B6',
        },
      },
      boxShadow: {
        editorial: '0 24px 60px rgba(33, 24, 18, 0.12)',
        soft: '0 16px 40px rgba(33, 24, 18, 0.08)',
      },
      letterSpacing: {
        product: '0.22em',
        luxury: '0.14em',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
