/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#17120f',
          espresso: '#2a1c16',
          charcoal: '#312823',
          muted: '#776a62',
          line: '#ded2c2',
          ivory: '#fbf7ef',
          porcelain: '#f4ede2',
          blush: '#ead9cf',
          gold: '#caa46a',
          brass: '#9d7644',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.18em',
        'wide-luxury': '0.28em',
      },
      boxShadow: {
        jewel: '0 24px 70px rgba(42, 28, 22, 0.14)',
        'soft-jewel': '0 14px 40px rgba(42, 28, 22, 0.09)',
      },
      aspectRatio: {
        product: '4 / 5',
        reel: '9 / 16',
        editorial: '5 / 6',
        hero: '16 / 11',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'soft-pulse': 'softPulse 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}
