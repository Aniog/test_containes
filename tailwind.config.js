/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#211915',
          espresso: '#332720',
          cream: '#F8F1E8',
          porcelain: '#FFFBF5',
          linen: '#E8D8C6',
          gold: '#B8864B',
          goldDark: '#8F6535',
          mauve: '#8A6F65',
          blush: '#D7B9A8',
        },
      },
      fontFamily: {
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.28em',
        luxury: '0.18em',
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(33, 25, 21, 0.12)',
        soft: '0 18px 45px rgba(51, 39, 32, 0.10)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        'soft-float': 'softFloat 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
